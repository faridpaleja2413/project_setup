import { Request, Response } from "express";
import {
  Body,
  Get,
  JsonController,
  Post,
  Put,
  Req,
  Res,
  Param,
  UseAfter,
  UseBefore,
  Delete,
  Patch,
} from "routing-controllers";
import { CustomErrorHandler } from "../../middleware/error-handler";
import { Container } from "typeorm-typedi-extensions";
import { usersLogInValidator } from "./userAuth.dto";
import { UserAuthService } from "./userAuth.service";
import { createToken } from "../../utils/token";

@JsonController("/userAuth")
@UseAfter(CustomErrorHandler)
export default class UserAuthController {
  private _userAuthcontroller: UserAuthService;
  constructor() {
    this._userAuthcontroller = Container.get(UserAuthService);
  }

  @Post("/login", { transformRequest: true })
  async getUser(
    @Req() req: Request,
    @Body() body: usersLogInValidator,
    @Res() res: any
  ) {
    try {
      const { email, password } = body?.payload?.data;
      const query = { email };
      const data = await this._userAuthcontroller.findUser(query);
      if (!data) {
        return res.formatter.error({}, false, "", "User not found");
      }
      if (!(data.password === password)) {
        return res.formatter.error({}, false, "", "Password Does not matched");
      }
      const token = await createToken(data.id);
      const payload = {
        token,
      };

      return res.formatter.ok(payload, true, "USRA-001");
    } catch (error) {
      // console.log(error);
      return res.formatter.error({}, false, "", error);
    }
  }

  // @Get("/list", { transformRequest: true })
  // async getAllUser(@Req() req: any, @Res() res: any, @Body() body: any) {
  //   try {
  //     const data = await this._userAuthcontroller.getAllUser();
  //     return res.formatter.ok(data, true, "EVT-001");
  //   } catch (error) {
  //     return res.formatter.error({}, false, "", error);
  //   }
  // }
}

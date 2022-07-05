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
import { usersValidator } from "./user.dto";
import { UserService } from "./user.service";
import checkAuth from "../../middleware/checkAuth";
/**
 * Date: 30 June 2022
 * Author: Farid Paleja
 * Description: User Controller
 * API Route: /users
 */
@JsonController("/users")
// @UseBefore(UserValidator)
// @UseBefore(AppValidator)
@UseAfter(CustomErrorHandler)
export default class UserController {
  private _usercontroller: UserService;
  constructor() {
    this._usercontroller = Container.get(UserService);
  }

  /**
   * Date: 30 June 2022
   * Author: Farid Paleja
   * Description: TO get all user list
   * API Route: /users/list (GET)
   *
   * @query find
   * @query page: 1, default:1
   * @query limit: 10, default:10
   *
   * @returns users list
   */
  @UseBefore(checkAuth)
  @Get("/list", { transformRequest: true })
  async getAllUser(@Req() req: any, @Res() res: any, @Body() body: any) {
    try {
      const data = await this._usercontroller.getAllUser();
      return res.formatter.ok(data, true, "USR-001");
    } catch (error) {
      return res.formatter.error({}, false, "", error);
    }
  }

  /**
   * Date: 30 June 2022
   * Author: Farid Paleja
   * Description: for creating new user
   * API Route: /users/add (POST)
   *
   * Flow steps:
   * 1. Collect all data from payload of user
   *     ( body.payload.data => { fullName, email, password, countryCode, mobileNumber, isActive } )
   * 2. Save to database
   * @body page: 1, default:1
   * @query create and save
   *
   * @returns user saved data
   */
  @UseBefore(checkAuth)
  @Post("/add", { transformRequest: true })
  async getUser(
    @Req() req: Request,
    @Body() body: usersValidator,
    @Res() res: any
  ) {
    try {
      const { fullName, email, password, countryCode, mobileNumber, isActive } =
        body?.payload?.data;
      const user = {
        fullName,
        email,
        password,
        countryCode,
        mobileNumber,
        isActive,
      };
      const data = await this._usercontroller.createUser(user);
      return res.formatter.ok(data, true, "USR-002");
    } catch (error) {
      return res.formatter.error({}, false, "", error);
    }
  }

  /**
   * Date: 30 June 2022
   * Author: Farid Paleja
   * Description: for updating user data
   * API Route: /users/edit/:id (PUT)
   *
   * Flow steps:
   * 1. Collect all data from payload of user
   *     ( body.payload.data => { fullName, email, password, countryCode, mobileNumber, isActive } )
   * 2. check user exist or not if exist then
   * 3. update user data in database by searching from userId
   * @params userId:string
   * @body user data
   * @query find user and update
   *
   * @returns user updated data
   */
  @UseBefore(checkAuth)
  @Put("/edit/:id?", { transformRequest: true })
  async updateUser(
    @Req() req: any,
    @Res() res: any,
    @Body() body: usersValidator,
    @Param("id") userId: string
  ) {
    try {
      const { fullName, email, password, countryCode, mobileNumber, isActive } =
        body?.payload?.data;
      const userDetail = {
        fullName,
        email,
        password,
        countryCode,
        mobileNumber,
        isActive,
      };

      const userData = await this._usercontroller.findOne(userId);
      if (!userData) {
        return res.formatter.error({}, false, "", "User not found");
      }

      const data = await this._usercontroller.updateUser(userId, userDetail);
      return res.formatter.ok(data, true, "USR-003");
    } catch (error) {
      return res.formatter.error({}, false, "", error);
    }
  }

  /**
   * Date: 30 June 2022
   * Author: Farid Paleja
   * Description: for soft delete user
   * API Route: /users/delete/:id (Delete)
   *
   * Flow steps:
   * 1. get userId from params
   * 3. delete user
   * @params userId:string
   * @body
   * @query find user and soft delete
   *
   * @returns user deleted
   */
  @UseBefore(checkAuth)
  @Delete("/delete/:id?", { transformRequest: true })
  async deleteUser(
    // @Req() req: any,
    @Res() res: any,
    // @Body() body: any,
    @Param("id") userId: string
  ) {
    try {
      await this._usercontroller.deleteUser(userId);
      return res.formatter.ok({}, true, "USR-004");
    } catch (error) {
      return res.formatter.error({}, false, "", error);
    }
  }

  /**
   * Date: 30 June 2022
   * Author: Farid Paleja
   * Description: for soft delete user
   * API Route: /users/restore/:id (Patch)
   *
   * Flow steps:
   * 1. get userId from params
   * 3. restore user data
   * @params userId:string
   * @body
   * @query find user and restore delete
   *
   * @returns user restored
   */
  @UseBefore(checkAuth)
  @Patch("/restore/:id?", { transformRequest: true })
  async restoreUser(
    // @Req() req: any,
    @Res() res: any,
    // @Body() body: any,
    @Param("id") userId: string
  ) {
    try {
      await this._usercontroller.restoreUser(userId);
      return res.formatter.ok({}, true, "USR-005");
    } catch (error) {
      return res.formatter.error({}, false, "", error);
    }
  }
}

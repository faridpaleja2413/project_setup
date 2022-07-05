import { Type } from "class-transformer";
import {
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  IsNumber,
  IsArray,
  IsNotEmpty,
  ValidateNested,
  IsEmail,
  IsBoolean,
} from "class-validator";

export class UsersAuthBody {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

class dataPayloadAuthUsers {
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => UsersAuthBody)
  data: UsersAuthBody;
}

export class usersLogInValidator {
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => dataPayloadAuthUsers)
  payload: dataPayloadAuthUsers;
}

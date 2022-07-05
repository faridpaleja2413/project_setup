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

export class UsersBody {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  countryCode: string;

  @IsNumber()
  mobileNumber: number;

  @IsBoolean()
  isActive: boolean;
}

class dataPayloadUsers {
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => UsersBody)
  data: UsersBody;
}

export class usersValidator {
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => dataPayloadUsers)
  payload: dataPayloadUsers;
}

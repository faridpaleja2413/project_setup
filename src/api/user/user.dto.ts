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
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  countryCode: string;

  @IsNotEmpty()
  @IsNumber()
  mobileNumber: number;

  @IsNotEmpty()
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

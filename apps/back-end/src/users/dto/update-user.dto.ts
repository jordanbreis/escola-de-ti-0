import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @MinLength(4)
  email: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(70)
  @MinLength(4)
  password: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(70)
  @MinLength(2)
  firstname: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(70)
  @MinLength(2)
  lastname: string;
  @Min(12)
  @Max(120)
  age: number;
  @IsBoolean()
  authorization: boolean;
}

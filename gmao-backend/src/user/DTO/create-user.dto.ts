import { IsNotEmpty, IsEmail, IsString, MaxLength } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
    
    readonly groups: string[];
}
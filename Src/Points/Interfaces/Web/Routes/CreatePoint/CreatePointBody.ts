import { IsString, IsEmail } from "class-validator";

export class CreatePointBody {
  @IsString()
  public name!: string;

  @IsEmail()
  public email!: string;

  @IsString()
  public password!: string;

  @IsString()
  public passwordConfirmation!: string;
}

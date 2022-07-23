class UserDto {
  readonly email: string
  readonly password: string
}

export class CreateUserDto extends UserDto {
  readonly name: string
}

export class LoginUserDto extends UserDto {}

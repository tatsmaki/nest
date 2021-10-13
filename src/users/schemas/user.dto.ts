export class CreateUserDto {
  readonly username: string
  readonly password: string
}

export class DeleteUserDto {
  readonly id: string
}

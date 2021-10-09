export class CreateUserDto {
  readonly name: string
  readonly password: string
}

export class DeleteUserDto {
  readonly id: number
}

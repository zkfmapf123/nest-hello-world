import { Body, Controller, Get, HttpCode, Inject, Param, Post, Query } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ReturnParams } from 'utils/interface'
import { ExceptionType } from 'utils/type'
import { CreateUserDto, LoginUserDto } from './users.dto'
import { UsersService } from './users.service'

@Controller('/users')
export class UsersController {
  @Inject(UsersService) userService: UsersService

  @Post()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Sign up user by creating an account',
    description: 'Given by email, name, password',
  })
  async register(@Body() userDto: CreateUserDto): Promise<ReturnParams<boolean>> {
    try {
      const { isRegister, err } = await this.userService.register(userDto)

      return {
        params: isRegister,
        exception: {
          msg: err.msg,
          type: err.type,
        },
      }
    } catch (e) {
      return {
        params: false,
        exception: {
          msg: e.message,
          type: ExceptionType.INTERNAL_ERR,
        },
      }
    }
  }

  @Post('/email-verify')
  @HttpCode(201)
  @ApiOperation({
    summary: 'verify by email',
    description: 'Given by email token',
  })
  async emailVerify(@Query() token: string): Promise<ReturnParams<boolean>> {
    try {
      const { isVerify, err } = await this.userService.emailVerify(token)

      return {
        params: isVerify,
        exception: {
          msg: err.msg,
          type: err.type,
        },
      }
    } catch (e) {
      return {
        params: false,
        exception: {
          msg: e.message,
          type: ExceptionType.INTERNAL_ERR,
        },
      }
    }
  }

  @Post('/login')
  @HttpCode(201)
  @ApiOperation({
    summary: 'login by user',
    description: 'Given by email, passwords',
  })
  async login(@Body() userDto: LoginUserDto): Promise<ReturnParams<boolean>> {
    this.userService.login(userDto)

    return {
      params: true,
      exception: null,
    }
  }

  @Get('/:id')
  @HttpCode(200)
  @ApiOperation({
    summary: 'get userinfo by user id',
    description: 'Given by user id',
  })
  async getProfile(@Param() id: string): Promise<ReturnParams<boolean>> {
    this.userService.getUser(id)

    return {
      params: true,
      exception: null,
    }
  }
}

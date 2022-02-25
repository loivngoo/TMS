import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetIdentifier } from './queries/impl/getIdentifier.query';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }


  @Get('identifier')
  async getIdentifier() {
    return this.queryBus.execute(new GetIdentifier({ token: 'empty', user_id: 0o7 }))
  }
}

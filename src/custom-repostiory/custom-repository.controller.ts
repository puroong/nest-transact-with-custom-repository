import { Controller, Get } from '@nestjs/common';
import { Connection, TransactionManager } from 'typeorm';
import { CustomRepositoryService } from './custom-repository.service';

@Controller('custom-repository')
export class CustomRepositoryController {
  constructor(
    private customRepositoryService: CustomRepositoryService,
    private connection: Connection,
  ) {}

  @Get()
  findCEntity() {
    return this.connection.transaction((transactionManager) => {
      return this.customRepositoryService
        .withTransaction(transactionManager)
        .find();
    });
  }
}

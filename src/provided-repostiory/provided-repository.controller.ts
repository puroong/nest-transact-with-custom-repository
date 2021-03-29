import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ProvidedRepositoryService } from './provided-repository.service';

@Controller('provided-repository')
export class ProvidedRepositoryController {
  constructor(
    private connection: Connection,
    private providedRepositoryService: ProvidedRepositoryService,
  ) {}

  @Get()
  findPEntity() {
    return this.connection.transaction((transactionManager) => {
      return this.providedRepositoryService
        .withTransaction(transactionManager)
        .find();
    });
  }
}

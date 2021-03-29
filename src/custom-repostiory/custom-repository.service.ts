import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { TransactionFor } from 'nest-transact';
import { CEntityRepository } from './centity.repository';

@Injectable()
export class CustomRepositoryService extends TransactionFor<CustomRepositoryService> {
  constructor(
    private cEntityRepository: CEntityRepository,
    moduleRef: ModuleRef,
  ) {
    super(moduleRef);
  }

  find() {
    return this.cEntityRepository.find();
  }
}

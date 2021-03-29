import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionFor } from 'nest-transact';
import { Repository } from 'typeorm';
import { PEntity } from './pentity.entity';

@Injectable()
export class ProvidedRepositoryService extends TransactionFor<ProvidedRepositoryService> {
  constructor(
    @InjectRepository(PEntity) private pEntityRepository: Repository<PEntity>,
    moduleRef: ModuleRef,
  ) {
    super(moduleRef);
  }

  find() {
    return this.pEntityRepository.find();
  }
}

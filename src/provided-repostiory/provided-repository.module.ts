import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PEntity } from './pentity.entity';
import { ProvidedRepositoryController } from './provided-repository.controller';
import { ProvidedRepositoryService } from './provided-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([PEntity])],
  controllers: [ProvidedRepositoryController],
  providers: [ProvidedRepositoryService],
  exports: [TypeOrmModule],
})
export class ProvidedRepositoryModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CEntityRepository } from './centity.repository';
import { CustomRepositoryController } from './custom-repository.controller';
import { CustomRepositoryService } from './custom-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([CEntityRepository])],
  controllers: [CustomRepositoryController],
  providers: [CustomRepositoryService],
  exports: [TypeOrmModule],
})
export class CustomRepositoryModule {}

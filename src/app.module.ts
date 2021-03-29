import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from './custom-repostiory/custom-repository.module';
import { ProvidedRepositoryModule } from './provided-repostiory/provided-repository.module';

@Module({
  imports: [
    CustomRepositoryModule,
    ProvidedRepositoryModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}

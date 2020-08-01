import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dog.entity';
import { DogRepository } from './dog.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Dog, DogRepository])],
  controllers: [DogController]
})
export class DogModule {}

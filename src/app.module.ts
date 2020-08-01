import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

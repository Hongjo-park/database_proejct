import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Racquet } from '../entities/racquet.entity';
import { RacquetsService } from './racquets.service';
import { RacquetsController } from './racquets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Racquet])], // Racquet 엔티티 등록
  controllers: [RacquetsController],
  providers: [RacquetsService],
})
export class RacquetsModule {}

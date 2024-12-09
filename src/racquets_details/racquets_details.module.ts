import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RacquetDetail } from '../entities/racquet_details.entity';
import { RacquetDetailsService } from './racquets_details.service';
import { RacquetDetailsController } from './racquets_details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RacquetDetail])],
  controllers: [RacquetDetailsController],
  providers: [RacquetDetailsService],
})
export class RacquetDetailsModule {}

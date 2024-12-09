import { Controller, Get, Query } from '@nestjs/common';
import { RacquetsService } from './racquets.service';
import { Racquet } from '../entities/racquet.entity';

@Controller('racquets')
export class RacquetsController {
  constructor(private readonly racquetsService: RacquetsService) {}

  @Get()
  async getRacquets(@Query('brand') brand: string): Promise<Racquet[]> {
    if (!brand) {
      throw new Error('Brand is required'); // 필요한 경우 예외 처리
    }
    return this.racquetsService.getRacquetsByBrand(brand);
  }
}

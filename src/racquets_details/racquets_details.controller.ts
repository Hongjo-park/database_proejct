import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { RacquetDetailsService } from './racquets_details.service';
import { RacquetDetail } from '../entities/racquet_details.entity';

@Controller('racquet-details')
export class RacquetDetailsController {
  constructor(private readonly racquetDetailsService: RacquetDetailsService) {}

  @Get()
  async getRacquetDetails(
    @Query('racquetId') racquetId: string,
  ): Promise<RacquetDetail[]> {
    const id = parseInt(racquetId, 10);
    if (isNaN(id)) {
      throw new Error('Invalid racquetId provided');
    }

    return this.racquetDetailsService.getDetailsByRacquetId(id);
  }

  @Get('single')
  async getSingleRacquetDetail(
    @Query('id') id: string,
  ): Promise<RacquetDetail> {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new Error('Invalid id provided');
    }

    // 왜 에러가 뜨지 -> 너무 길면 줄 바꿈..
    const racquetDetail =
      await this.racquetDetailsService.getSingleDetailById(parsedId);

    if (!racquetDetail) {
      throw new NotFoundException(
        `Racquet detail with id ${parsedId} not found`,
      );
    }

    return racquetDetail;
  }
}

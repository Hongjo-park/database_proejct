import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RacquetDetail } from '../entities/racquet_details.entity';

@Injectable()
export class RacquetDetailsService {
  constructor(
    @InjectRepository(RacquetDetail)
    private readonly racquetDetailsRepository: Repository<RacquetDetail>,
  ) {}

  async getDetailsByRacquetId(racquetId: number): Promise<RacquetDetail[]> {
    return this.racquetDetailsRepository.find({
      where: { racquet_id: racquetId, deleted_at: null }, // Soft delete 적용
    });
  }

  async getSingleDetailById(id: number): Promise<RacquetDetail | null> {
    return this.racquetDetailsRepository.findOne({
      where: { id, deleted_at: null },
    });
  }
}

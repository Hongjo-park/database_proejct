import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Racquet } from '../entities/racquet.entity';

@Injectable()
export class RacquetsService {
  constructor(
    @InjectRepository(Racquet)
    private readonly racquetRepository: Repository<Racquet>,
  ) {}

  async getRacquetsByBrand(brand: string): Promise<Racquet[]> {
    return this.racquetRepository.find({
      where: { manufacturer: brand, deleted_at: null },
    });
  }
}

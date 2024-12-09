import { Repository } from 'typeorm';
import { Racquet } from '../entities/racquet.entity';
export declare class RacquetsService {
    private readonly racquetRepository;
    constructor(racquetRepository: Repository<Racquet>);
    getRacquetsByBrand(brand: string): Promise<Racquet[]>;
}

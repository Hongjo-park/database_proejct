import { Repository } from 'typeorm';
import { RacquetDetail } from '../entities/racquet_details.entity';
export declare class RacquetDetailsService {
    private readonly racquetDetailsRepository;
    constructor(racquetDetailsRepository: Repository<RacquetDetail>);
    getDetailsByRacquetId(racquetId: number): Promise<RacquetDetail[]>;
    getSingleDetailById(id: number): Promise<RacquetDetail | null>;
}

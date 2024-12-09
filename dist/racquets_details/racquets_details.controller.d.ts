import { RacquetDetailsService } from './racquets_details.service';
import { RacquetDetail } from '../entities/racquet_details.entity';
export declare class RacquetDetailsController {
    private readonly racquetDetailsService;
    constructor(racquetDetailsService: RacquetDetailsService);
    getRacquetDetails(racquetId: string): Promise<RacquetDetail[]>;
    getSingleRacquetDetail(id: string): Promise<RacquetDetail>;
}

import { RacquetsService } from './racquets.service';
import { Racquet } from '../entities/racquet.entity';
export declare class RacquetsController {
    private readonly racquetsService;
    constructor(racquetsService: RacquetsService);
    getRacquets(brand: string): Promise<Racquet[]>;
}

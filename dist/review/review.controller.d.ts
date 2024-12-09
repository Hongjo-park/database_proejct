import { ReviewService } from './review.service';
import { Review } from '../entities/review.entity';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getReviewsByUserId(userId: string): Promise<Review[]>;
    getReviewsByRacquetDetail(racquetDetailId: string): Promise<any[]>;
    addReview(reviewData: Partial<Review>): Promise<Review>;
    deleteReview(id: number): Promise<void>;
}

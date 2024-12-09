import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';
export declare class ReviewService {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    getReviewsByUserId(userId: number): Promise<Review[]>;
    addReview(reviewData: Partial<Review>): Promise<Review>;
    deleteReview(id: number): Promise<void>;
    getReviewsByRacquetDetailId(racquetDetailId: number): Promise<any[]>;
}

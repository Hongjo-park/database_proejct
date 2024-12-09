import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  // user_id로 리뷰 조회
  async getReviewsByUserId(userId: number): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { user_id: userId, deleted_at: null },
      order: { created_at: 'DESC' }, // 최신순 정렬
    });
  }

  // racquet_detail_id로 리뷰 조회
  //   async getReviewsByRacquetDetailId(
  //     racquetDetailId: number,
  //   ): Promise<Review[]> {
  //     return this.reviewRepository.find({
  //       where: { racquet_detail_id: racquetDetailId, deleted_at: null },
  //       order: { created_at: 'DESC' }, // 최신순 정렬
  //     });
  //   }

  async addReview(reviewData: Partial<Review>): Promise<Review> {
    const review = this.reviewRepository.create(reviewData);
    return this.reviewRepository.save(review);
  }

  async deleteReview(id: number): Promise<void> {
    await this.reviewRepository.softDelete(id);
  }

  async getReviewsByRacquetDetailId(racquetDetailId: number): Promise<any[]> {
    return this.reviewRepository
      .createQueryBuilder('review')
      .leftJoinAndSelect(User, 'user', 'review.user_id = user.id') // user 테이블과 조인
      .where('review.racquet_detail_id = :racquetDetailId', { racquetDetailId })
      .select([
        'review.id',
        'review.racquet_detail_id',
        'review.comment',
        'review.created_at',
        'user.id',
        'user.name',
      ])
      .getRawMany();
  }
}

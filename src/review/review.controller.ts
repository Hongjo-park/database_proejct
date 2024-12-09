import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Delete,
  ParseIntPipe,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from '../entities/review.entity';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // user_id로 리뷰 조회
  @Get('user')
  async getReviewsByUserId(@Query('userId') userId: string): Promise<Review[]> {
    const id = parseInt(userId, 10);
    if (isNaN(id)) {
      throw new BadRequestException('Invalid userId');
    }
    return this.reviewService.getReviewsByUserId(id);
  }

  // racquet_detail_id로 리뷰 조회
  @Get('racquet-detail')
  async getReviewsByRacquetDetail(
    @Query('racquetDetailId') racquetDetailId: string,
  ) {
    const id = parseInt(racquetDetailId, 10);
    if (isNaN(id)) {
      throw new Error('Invalid racquetDetailId provided');
    }
    return this.reviewService.getReviewsByRacquetDetailId(id);
  }

  @Post()
  async addReview(@Body() reviewData: Partial<Review>): Promise<Review> {
    return this.reviewService.addReview(reviewData);
  }

  @Delete(':id')
  @HttpCode(204) // No Content
  async deleteReview(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.reviewService.deleteReview(id);
  }
}

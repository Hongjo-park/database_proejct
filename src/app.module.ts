import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { RacquetsModule } from './racquets/racquets.module';
import { Racquet } from './entities/racquet.entity';
import { RacquetDetailsModule } from './racquets_details/racquets_details.module';
import { RacquetDetail } from './entities/racquet_details.entity';
import { Review } from './entities/review.entity';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User, Racquet, RacquetDetail, Review],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    RacquetsModule,
    RacquetDetailsModule,
    ReviewModule,
  ],
})
export class AppModule {}

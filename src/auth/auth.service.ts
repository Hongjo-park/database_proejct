import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(name: string, email: string, password: string): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new UnauthorizedException('이미 사용 중인 이메일입니다.');
    }

    if (!password) {
      throw new Error('Password is required'); // 비밀번호가 없을 경우 예외 처리
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호와 salt 값 전달

    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ id: number; accessToken: string; name: string; email: string }> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 잘못되었습니다.');
    }

    const payload = { userId: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return {
      id: user.id,
      accessToken,
      name: user.name,
      email: user.email,
    };
  }

  async getUserById(userId: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id: userId },
    });
  }
}

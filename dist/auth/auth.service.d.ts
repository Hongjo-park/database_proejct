import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<{
        id: number;
        accessToken: string;
        name: string;
        email: string;
    }>;
    getUserById(userId: number): Promise<User | null>;
}

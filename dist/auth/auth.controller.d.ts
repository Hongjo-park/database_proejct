import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        id: number;
        accessToken: string;
        name: string;
        email: string;
    }>;
    getUserById(userId: string): Promise<import("../entities/user.entity").User>;
}

import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('AuthGuard', () => {
  let jwtService: JwtService;

  beforeEach(() => {
    jwtService = new JwtService({});
  });

  it('should be defined', () => {
    const guard = new AuthGuard(jwtService);
    expect(guard).toBeDefined();
  });
});

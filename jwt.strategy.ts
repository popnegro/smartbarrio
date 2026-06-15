import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'sb-enterprise-secret-2026',
    });
  }

  async validate(payload: any) {
    // El payload contiene el sub (userId), email, role y tenantId
    if (!payload.tenantId) {
      throw new UnauthorizedException('Token is not bound to a valid tenant');
    }
    return { 
      userId: payload.sub, 
      email: payload.email, 
      role: payload.role, 
      tenantId: payload.tenantId 
    };
  }
}
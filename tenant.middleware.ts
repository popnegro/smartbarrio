import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // En SmartBarrio, identificamos al tenant por un header X-Tenant-ID 
    // o resolvemos mediante el subdominio (ej: ferreteria.smartbarrio.com)
    const tenantId = req.headers['x-tenant-id'] as string;
    const host = req.headers.host;

    // Lógica de resolución de subdominio para entornos de producción
    const isCustomDomain = host && !host.includes('smartbarrio.com') && !host.includes('localhost');
    
    if (!tenantId && !isCustomDomain && !req.path.includes('/auth') && !req.path.includes('/health')) {
      throw new BadRequestException('Tenant identification is missing.');
    }

    // Adjuntamos el tenantId al objeto de la petición para uso en guards y decoradores
    req['tenantId'] = tenantId;
    
    // Si es un dominio personalizado, aquí iría la consulta a caché (Redis) 
    // para mapear el dominio al ID interno del negocio.
    
    next();
  }
}
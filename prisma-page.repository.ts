import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { IPageRepository } from '../../domain/repositories/page.repository.interface';

@Injectable()
export class PrismaPageRepository implements IPageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string, tenantId: string) {
    return this.prisma.page.findFirst({
      where: { id, tenantId },
    });
  }

  async findBySlug(slug: string, tenantId?: string) {
    // Si no hay tenantId, buscamos globalmente (para el flujo público)
    return this.prisma.page.findFirst({
      where: tenantId ? { slug, tenantId } : { slug },
    });
  }

  async update(id: string, tenantId: string, data: any): Promise<void> {
    await this.prisma.page.update({
      where: { 
        id_tenantId: { id, tenantId } // Usando índice compuesto si existe, o where simple
      },
      data: {
        ...data,
      },
    });
  }
}
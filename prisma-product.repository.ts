import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IProductRepository } from './apps/api/src/modules/inventory/domain/repositories/product.repository.interface';
import { Product } from './apps/api/src/modules/inventory/domain/entities/product.entity';

@Injectable()
export class PrismaProductRepository implements IProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string, tenantId: string): Promise<Product | null> {
    const data = await this.prisma.product.findFirst({
      where: { id, tenantId },
      include: {
        // En un esquema real, variantes sería una relación. Aquí lo manejamos como Json robusto.
      }
    });

    if (!data) return null;

    return new Product({
      id: data.id,
      tenantId: data.tenantId,
      name: data.name,
      description: data.description || undefined,
      basePrice: Number(data.price),
      baseStock: data.stock,
      category: 'General', // Simplificado para el ejemplo
      sku: data.sku || '',
      images: [],
      variants: (data as any).variants || [],
      isActive: true,
    });
  }

  async save(product: Product): Promise<void> {
    const data = product.toJSON();
    await this.prisma.product.create({
      data: {
        tenantId: data.tenantId,
        name: data.name,
        price: data.basePrice,
        stock: data.baseStock,
        sku: data.sku,
        // variants se manejaría como un campo JSON o tabla relacionada según la escala
      }
    });
  }

  async update(product: Product): Promise<void> {
    const data = product.toJSON();
    await this.prisma.product.update({
      where: { 
        id: data.id,
        tenantId: data.tenantId 
      },
      data: { 
        stock: data.baseStock,
        price: data.basePrice,
        updatedAt: new Date()
      }
    });
  }
}
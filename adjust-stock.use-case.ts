import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IProductRepository } from '../../domain/repositories/product.repository.interface';

export interface AdjustStockInput {
  productId: string;
  tenantId: string;
  quantity: number; // Negativo para ventas, positivo para reposición
  variantId?: string;
}

@Injectable()
export class AdjustStockUseCase {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository
  ) {}

  async execute(input: AdjustStockInput): Promise<void> {
    const product = await this.productRepository.findById(input.productId, input.tenantId);
    
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    try {
      product.adjustStock(input.quantity, input.variantId);
      await this.productRepository.update(product);
      
      // Aquí dispararíamos un evento de dominio si el stock llega a niveles críticos
      // logic: if (product.totalStock < 5) this.eventBus.publish(...)
    } catch (error) {
      throw new Error(`Error al ajustar stock: ${error.message}`);
    }
  }
}
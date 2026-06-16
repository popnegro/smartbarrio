import { Module } from '@nestjs/common';
import { AdjustStockUseCase } from './apps/api/src/modules/inventory/application/use-cases/adjust-stock.use-case';
import { PrismaProductRepository } from './prisma-product.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [], // Aquí se agregarán los controladores de productos
  providers: [
    PrismaService,
    AdjustStockUseCase,
    {
      provide: 'IProductRepository',
      useClass: PrismaProductRepository,
    },
  ],
  exports: [
    AdjustStockUseCase,
    'IProductRepository',
  ],
})
export class InventoryModule {}
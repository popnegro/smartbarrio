import { Module } from '@nestjs/common';
import { CustomerController } from './infrastructure/http/controllers/customer.controller';
import { CreateCustomerUseCase } from './application/use-cases/create-customer.use-case';
import { PrismaCustomerRepository } from './infrastructure/persistence/prisma-customer.repository';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [CustomerController],
  providers: [
    PrismaService,
    CreateCustomerUseCase,
    {
      provide: 'ICustomerRepository',
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [
    'ICustomerRepository',
    CreateCustomerUseCase,
  ],
})
export class CrmModule {}
import { Controller, Post, Get, Body, UseGuards, Inject } from '@nestjs/common';
import { CreateCustomerUseCase } from '../../../application/use-cases/create-customer.use-case';
import { ICustomerRepository } from '../../../domain/repositories/customer.repository.interface';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { JwtAuthGuard } from '../../../../auth/infrastructure/guards/jwt.guard';
import { CurrentTenant } from '../../../../core/decorators/tenant.decorator';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { RolesGuard } from '../../../../core/guards/roles.guard';
import { Role } from '@prisma/client';

@Controller('crm/customers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    @Inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository
  ) {}

  @Post()
  @Roles(Role.OWNER, Role.ADMIN, Role.EMPLOYEE)
  async create(
    @Body() dto: CreateCustomerDto,
    @CurrentTenant() tenantId: string
  ) {
    return await this.createCustomerUseCase.execute({ ...dto, tenantId });
  }

  @Get()
  async findAll(@CurrentTenant() tenantId: string) {
    const customers = await this.customerRepository.findAll(tenantId);
    return customers.map(c => c.toJSON());
  }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service'; // Asumiendo que existe un PrismaService global
import { ICustomerRepository } from '../../domain/repositories/customer.repository.interface';
import { Customer } from '../../domain/entities/customer.entity';

@Injectable()
export class PrismaCustomerRepository implements ICustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(customer: Customer): Promise<void> {
    await this.prisma.customer.create({
      data: {
        id: customer.id,
        tenantId: customer.tenantId,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        tags: customer.tags,
        metadata: customer.metadata as any,
      },
    });
  }

  async findById(id: string, tenantId: string): Promise<Customer | null> {
    const data = await this.prisma.customer.findFirst({
      where: { id, tenantId },
    });
    if (!data) return null;
    return new Customer({
      ...data,
      metadata: data.metadata as Record<string, any>,
    });
  }

  async findAll(tenantId: string): Promise<Customer[]> {
    const customers = await this.prisma.customer.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
    return customers.map(c => new Customer({
      ...c,
      metadata: c.metadata as Record<string, any>,
    }));
  }

  async update(customer: Customer): Promise<void> {
    await this.prisma.customer.update({
      where: { id: customer.id },
      data: customer.toJSON(),
    });
  }

  async delete(id: string, tenantId: string): Promise<void> {
    await this.prisma.customer.delete({ where: { id, tenantId } });
  }
}
import { Injectable, Inject } from '@nestjs/common';
import { Customer } from '../../domain/entities/customer.entity';
import { ICustomerRepository } from '../../domain/repositories/customer.repository.interface';

export interface CreateCustomerInput {
  tenantId: string;
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository
  ) {}

  async execute(input: CreateCustomerInput): Promise<Customer> {
    const customer = new Customer({
      ...input,
      tags: input.tags || [],
    });
    await this.customerRepository.save(customer);
    return customer;
  }
}
import { Customer } from '../entities/customer.entity';

export interface ICustomerRepository {
  save(customer: Customer): Promise<void>;
  findById(id: string, tenantId: string): Promise<Customer | null>;
  findAll(tenantId: string, filters?: any): Promise<Customer[]>;
  update(customer: Customer): Promise<void>;
  delete(id: string, tenantId: string): Promise<void>;
}
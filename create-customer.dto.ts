import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateCustomerSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
});

export class CreateCustomerDto extends createZodDto(CreateCustomerSchema) {}
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { BlockSchema } from '../../../../../../../builder.types';

const UpdatePageSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  content: z.array(BlockSchema),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    ogImage: z.string().optional(),
  }),
});

export class UpdatePageDto extends createZodDto(UpdatePageSchema) {}
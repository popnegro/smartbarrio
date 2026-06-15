import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IPageRepository } from '../../domain/repositories/page.repository.interface';

export interface UpdatePageInput {
  id: string;
  tenantId: string;
  title: string;
  content: any[];
  seo: any;
}

@Injectable()
export class UpdatePageUseCase {
  constructor(
    @Inject(IPageRepository)
    private readonly pageRepository: IPageRepository
  ) {}

  async execute(input: UpdatePageInput): Promise<void> {
    const page = await this.pageRepository.findById(input.id, input.tenantId);
    
    if (!page) {
      throw new NotFoundException(`Page with ID ${input.id} not found for this tenant`);
    }

    await this.pageRepository.update(input.id, input.tenantId, {
      title: input.title,
      content: input.content,
      seo: input.seo,
    });
  }
}
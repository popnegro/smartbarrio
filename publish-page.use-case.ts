import { Injectable, Inject, NotFoundException, ConflictException } from '@nestjs/common';
import { IPageRepository } from '../../domain/repositories/page.repository.interface';
import { nanoid } from 'nanoid';

export interface PublishPageInput {
  id: string;
  tenantId: string;
  customSlug?: string;
}

@Injectable()
export class PublishPageUseCase {
  constructor(
    @Inject(IPageRepository)
    private readonly pageRepository: IPageRepository
  ) {}

  async execute(input: PublishPageInput): Promise<{ slug: string }> {
    const page = await this.pageRepository.findById(input.id, input.tenantId);
    
    if (!page) {
      throw new NotFoundException(`Página no encontrada para este negocio.`);
    }

    // Generación de slug único si no se provee uno
    let finalSlug = input.customSlug || this.slugify(page.title);
    
    // Verificar colisión de slug
    const existingPage = await this.pageRepository.findBySlug(finalSlug, input.tenantId);
    if (existingPage && existingPage.id !== input.id) {
      finalSlug = `${finalSlug}-${nanoid(6)}`;
    }

    await this.pageRepository.update(input.id, input.tenantId, {
      slug: finalSlug,
      isPublished: true,
      updatedAt: new Date(),
    });

    return { slug: finalSlug };
  }

  private slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')     // Espacios por guiones
      .replace(/[^\w-]+/g, ''); // Eliminar caracteres no alfanuméricos
  }
}
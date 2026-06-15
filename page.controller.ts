import { Controller, Patch, Post, Param, Body, UseGuards } from '@nestjs/common';
import { UpdatePageUseCase } from '../../../application/use-cases/update-page.use-case';
import { PublishPageUseCase } from '../../../application/use-cases/publish-page.use-case';
import { UpdatePageDto } from '../dtos/update-page.dto';
import { JwtAuthGuard } from '../../../../auth/infrastructure/guards/jwt.guard';
import { CurrentTenant } from '../../../../core/decorators/tenant.decorator';

@Controller('builder/pages')
@UseGuards(JwtAuthGuard)
export class PageController {
  constructor(
    private readonly updatePageUseCase: UpdatePageUseCase,
    private readonly publishPageUseCase: PublishPageUseCase
  ) {}

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @CurrentTenant() tenantId: string,
    @Body() dto: UpdatePageDto
  ) {
    await this.updatePageUseCase.execute({
      id,
      tenantId,
      title: dto.title,
      content: dto.content,
      seo: dto.seo,
    });

    return { success: true, message: 'Page updated successfully' };
  }

  @Post(':id/publish')
  async publish(
    @Param('id') id: string,
    @CurrentTenant() tenantId: string,
    @Body('customSlug') customSlug?: string
  ) {
    return await this.publishPageUseCase.execute({ id, tenantId, customSlug });
  }
}
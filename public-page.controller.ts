import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';

@Controller('public/pages')
export class PublicPageController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(':slug')
  async getPublishedPage(@Param('slug') slug: string) {
    const page = await this.prisma.page.findFirst({
      where: { 
        slug,
        isPublished: true 
      },
      include: {
        tenant: {
          select: { name: true, logoUrl: true }
        }
      }
    });

    if (!page) throw new NotFoundException('La página no existe o no ha sido publicada.');
    return page;
  }
}
import { Module } from '@nestjs/common';
import { PageController } from './infrastructure/http/controllers/page.controller';
import { PublicPageController } from './infrastructure/http/controllers/public-page.controller';
import { UpdatePageUseCase } from './application/use-cases/update-page.use-case';
import { PublishPageUseCase } from './application/use-cases/publish-page.use-case';
import { PrismaPageRepository } from './infrastructure/persistence/prisma-page.repository';
import { IPageRepository } from './domain/repositories/page.repository.interface';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [PageController, PublicPageController],
  providers: [
    PrismaService,
    UpdatePageUseCase,
    PublishPageUseCase,
    {
      provide: IPageRepository,
      useClass: PrismaPageRepository,
    },
  ],
  exports: [UpdatePageUseCase, PublishPageUseCase],
})
export class BuilderModule {}
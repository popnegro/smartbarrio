import { Module } from '@nestjs/common';
import { PaymentController } from './demo/payment.controller';
import { GetDashboardStatsUseCase } from './get-dashboard-stats.use-case';
import { ReportTransferUseCase } from './report-transfer.use-case';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [PaymentController],
  providers: [
    PrismaService,
    GetDashboardStatsUseCase,
    ReportTransferUseCase,
  ],
  exports: [
    GetDashboardStatsUseCase,
  ],
})
export class PaymentsModule {}
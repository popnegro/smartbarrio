import { Controller, Post, Patch, Get, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../jwt.strategy';
import { CurrentTenant } from '../tenant.middleware'; // Asumiendo decorador en middleware o carpeta core corregida
import { PaymentStatus } from './payment.entity';
import { GetDashboardStatsUseCase } from '../get-dashboard-stats.use-case';
import { ReportTransferUseCase } from '../report-transfer.use-case';
import { PrismaService } from '../prisma.service';

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly getDashboardStatsUseCase: GetDashboardStatsUseCase,
    private readonly reportTransferUseCase: ReportTransferUseCase,
    private readonly prisma: PrismaService
  ) {}

  @Post('report')
  async reportTransfer(@Body() data: { orderId: string, proofUrl: string, amount: number }) {
    const payment = await this.reportTransferUseCase.execute(data);
    return payment.toJSON();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/verify')
  async verifyPayment(
    @Param('id') id: string,
    @CurrentTenant() tenantId: string,
    @Body('action') action: 'approve' | 'reject'
  ) {
    const status = action === 'approve' ? PaymentStatus.APPROVED : PaymentStatus.REJECTED;
    return this.prisma.payment.update({
      where: { id, tenantId },
      data: { status }
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('stats')
  async getDashboardStats(@CurrentTenant() tenantId: string) {
    return await this.getDashboardStatsUseCase.execute(tenantId);
  }
}
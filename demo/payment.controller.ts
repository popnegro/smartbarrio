import { Controller, Post, Patch, Get, Body, Param, UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../../../../auth/infrastructure/guards/jwt.guard';
import { CurrentTenant } from '../../../../core/decorators/tenant.decorator';
import { PrismaService } from '../../../../database/prisma.service';
import { PaymentStatus } from '../../domain/entities/payment.entity';
import { GetDashboardStatsUseCase } from '../../application/use-cases/get-dashboard-stats.use-case';

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly getDashboardStatsUseCase: GetDashboardStatsUseCase
  ) {}

  // Endpoint público: El cliente informa que ya transfirió
  @Post('report')
  async reportTransfer(@Body() data: { orderId: string, proofUrl: string, amount: number }) {
    const order = await this.prisma.order.findUnique({ where: { id: data.orderId } });
    
    return this.prisma.payment.create({
      data: {
        orderId: data.orderId,
        tenantId: order.tenantId,
        amount: data.amount,
        status: PaymentStatus.VERIFYING,
        proofUrl: data.proofUrl,
      }
    });
  }

  // Endpoint privado: El comercio aprueba/rechaza
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
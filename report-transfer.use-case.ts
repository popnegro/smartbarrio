import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Payment, PaymentStatus } from './demo/payment.entity';

export interface ReportTransferInput {
  orderId: string;
  proofUrl: string;
  amount: number;
}

@Injectable()
export class ReportTransferUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: ReportTransferInput): Promise<Payment> {
    const order = await this.prisma.order.findUnique({
      where: { id: input.orderId },
    });

    if (!order) throw new NotFoundException('Order not found');

    const paymentData = await this.prisma.payment.create({
      data: {
        orderId: input.orderId,
        tenantId: order.tenantId,
        amount: input.amount,
        status: PaymentStatus.VERIFYING,
        proofUrl: input.proofUrl,
      },
    });

    return new Payment(paymentData as any);
  }
}
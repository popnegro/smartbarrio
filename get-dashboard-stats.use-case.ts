import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { PaymentStatus } from '../../domain/entities/payment.entity';

@Injectable()
export class GetDashboardStatsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(tenantId: string) {
    const [payments, pages] = await Promise.all([
      this.prisma.payment.findMany({ where: { tenantId } }),
      this.prisma.page.findMany({ where: { tenantId } }),
    ]);

    const approvedPayments = payments.filter(p => p.status === PaymentStatus.APPROVED);
    const reportedPayments = payments.filter(p => p.status === PaymentStatus.VERIFYING);
    
    const totalRevenue = approvedPayments.reduce((acc, p) => acc + Number(p.amount), 0);

    // Simulamos visitas y clics (Leads) hasta implementar el tracker de eventos
    // En producción, esto vendría de una tabla de Analytics o Redis
    const mockVisits = 1250;
    const mockWhatsAppClicks = 320;

    return {
      summary: {
        revenue: totalRevenue,
        pendingAmount: reportedPayments.reduce((acc, p) => acc + Number(p.amount), 0),
        totalOrders: payments.length,
        conversionRate: ((approvedPayments.length / mockVisits) * 100).toFixed(2),
      },
      funnel: [
        { step: 'Visitas', value: mockVisits, percentage: 100 },
        { step: 'WhatsApp / Leads', value: mockWhatsAppClicks, percentage: Math.round((mockWhatsAppClicks / mockVisits) * 100) },
        { step: 'Pagos Informados', value: payments.length, percentage: Math.round((payments.length / mockWhatsAppClicks) * 100) },
        { step: 'Ventas Confirmadas', value: approvedPayments.length, percentage: Math.round((approvedPayments.length / payments.length) * 100) },
      ],
      seoStatus: {
        publishedPages: pages.filter(p => p.isPublished).length,
        indexedSlugs: pages.filter(p => p.isPublished && p.slug).map(p => p.slug),
        sitemapStatus: 'active',
        healthScore: 98,
        localRanking: {
          city: "Las Heras",
          status: "Optimal",
          keywords: ["ferretería", "herramientas", "construcción"]
        }
      }
    };
  }
}
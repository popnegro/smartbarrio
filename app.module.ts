import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrmModule } from './crm.module';
import { AuthModule } from './auth.module';
import { InventoryModule } from './inventory.module';
import { PaymentsModule } from './payments.module';
import { BuilderModule } from './builder.module';
import { TenantMiddleware } from './tenant.middleware';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CrmModule,
    InventoryModule,
    PaymentsModule,
    BuilderModule,
  ],
  providers: [PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .exclude(
        { path: 'auth/(.*)', method: RequestMethod.ALL },
        { path: 'health', method: RequestMethod.GET },
        { path: 'public/(.*)', method: RequestMethod.GET }
      )
      .forRoutes('*');
  }
}
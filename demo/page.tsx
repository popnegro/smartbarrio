"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Search, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@smartbarrio/ui/src/components/ui/button";

export default function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const res = await fetch("/api/payments/stats", {
        headers: {
          "X-Tenant-ID": "tenant_default_123", // ID de prueba para entorno local
        },
      });
      return res.json();
    }
  });

  if (isLoading) return <div className="p-8 animate-pulse">Cargando métricas...</div>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Panel de Control</h1>
        <p className="text-muted-foreground">Bienvenido a SmartBarrio. Así va tu negocio hoy.</p>
      </div>

      {/* Resumen Superior */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Recaudación Total" 
          value={`$${data.summary.revenue.toLocaleString()}`} 
          icon={<CreditCard className="h-4 w-4 text-primary" />}
          trend="+12.5% vs mes anterior"
        />
        <StatCard 
          title="Tasa de Conversión" 
          value={`${data.summary.conversionRate}%`} 
          icon={<TrendingUp className="h-4 w-4 text-primary" />}
          trend="Óptimo para el rubro"
        />
        <StatCard 
          title="Pagos por Verificar" 
          value={data.summary.pendingAmount > 0 ? `$${data.summary.pendingAmount}` : "0"} 
          icon={<AlertCircle className="h-4 w-4 text-amber-500" />}
          trend="Requiere tu acción"
        />
        <StatCard 
          title="SEO Health" 
          value={`${data.seoStatus.healthScore}/100`} 
          icon={<Search className="h-4 w-4 text-green-500" />}
          trend="Visible en Las Heras"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        {/* Embudo de Ventas */}
        <div className="col-span-4 rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Embudo de Ventas</h2>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {data.funnel.map((item: any, i: number) => (
              <div key={item.step} className="relative">
                <div className="flex items-center justify-between mb-1 text-sm">
                  <span className="font-medium">{item.step}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-secondary">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estado SEO Local */}
        <div className="col-span-3 rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">SEO Local & Indexación</h2>
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Sitemap y Robots.txt</p>
                <p className="text-xs text-muted-foreground">Generados y vinculados a Google Search Console.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Palabras Clave en {data.seoStatus.localRanking.city}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {data.seoStatus.localRanking.keywords.map((kw: string) => (
                    <span key={kw} className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full gap-2 text-xs">
              Ver reporte detallado de SEO <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon}
      </div>
      <div className="mt-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-muted-foreground mt-1">{trend}</p>
      </div>
    </div>
  );
}
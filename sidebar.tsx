"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@smartbarrio/ui/src/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  Settings, 
  BarChart3, 
  Zap,
  Globe
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "CRM / Clientes", href: "/crm", icon: Users },
  { name: "Inventario", href: "/inventory", icon: Package },
  { name: "Ventas", href: "/sales", icon: ShoppingCart },
  { name: "Automatizaciones", href: "/automations", icon: Zap },
  { name: "Marketing / Web", href: "/builder", icon: Globe },
  { name: "Reportes", href: "/analytics", icon: BarChart3 },
  { name: "Configuración", href: "/settings", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex flex-col h-screen sticky top-0", className)}>
      <div className="flex h-16 items-center px-6 border-b">
        <span className="text-xl font-bold tracking-tight text-primary">
          SmartBarrio
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="text-xs font-semibold text-primary uppercase">Plan Business</p>
          <p className="text-xs text-muted-foreground mt-1">85% del stock verificado</p>
        </div>
      </div>
    </aside>
  );
}
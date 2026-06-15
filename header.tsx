"use client";

import React from "react";
import { Button } from "@smartbarrio/ui/src/components/ui/button";
import { Bell, Search, UserCircle, Store } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
          <Store className="h-4 w-4" />
          <span>Ferretería "El Clavo"</span>
        </div>
        <div className="hidden relative md:block w-64 lg:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar productos, clientes..."
            className="w-full rounded-md border border-input bg-background pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
        </Button>
        <div className="h-8 w-[1px] bg-border mx-1" />
        <Button variant="ghost" className="gap-2 px-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <UserCircle className="h-5 w-5 text-primary" />
          </div>
          <span className="hidden text-sm font-medium md:inline-block">Admin</span>
        </Button>
      </div>
    </header>
  );
}
"use client";

import React from "react";
import { Block } from "../types/builder.types";
import { cn } from "@smartbarrio/ui/src/lib/utils";

// Importación diferida o estática de los componentes visuales de la landing
const BlockRenderer = ({ block, isSelected, onClick }: { 
  block: Block, 
  isSelected: boolean,
  onClick: () => void 
}) => {
  // Mapeo de tipos de bloque a componentes
  const renderContent = () => {
    switch (block.type) {
      case "hero":
        return (
          <section className="py-20 text-center bg-slate-50">
            <h1 className="text-5xl font-bold">{block.content.title || "Título Hero"}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{block.content.subtitle || "Subtítulo descriptivo"}</p>
          </section>
        );
      case "features":
        return <div className="py-12 px-4 border-dashed border-2">Módulo de Características</div>;
      default:
        return <div className="p-4 bg-red-100">Bloque desconocido: {block.type}</div>;
    }
  };

  return (
    <div 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={cn(
        "relative group cursor-pointer transition-all duration-200 border-2 border-transparent",
        isSelected ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/40"
      )}
    >
      {renderContent()}
    </div>
  );
};

export function BuilderCanvas({ blocks, selectedId, onSelect }: { 
  blocks: Block[], 
  selectedId: string | null,
  onSelect: (id: string) => void
}) {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-200/50 p-8 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-b-xl overflow-hidden min-h-[1000px]">
        {blocks.map((block) => (
          <BlockRenderer 
            key={block.id} 
            block={block} 
            isSelected={selectedId === block.id}
            onClick={() => onSelect(block.id)}
          />
        ))}
        {blocks.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
            <p>El lienzo está vacío. Añade un bloque desde la barra lateral.</p>
          </div>
        )}
      </div>
    </div>
  );
}
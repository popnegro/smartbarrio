export interface ProductVariant {
  id: string;
  name: string; // Ej: "Rojo / XL"
  sku: string;
  price: number;
  stock: number;
}

export interface ProductProps {
  id?: string;
  tenantId: string;
  name: string;
  description?: string;
  basePrice: number;
  baseStock: number;
  category: string;
  sku: string;
  images: string[];
  variants: ProductVariant[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product {
  private props: ProductProps;

  constructor(props: ProductProps) {
    this.props = {
      ...props,
      isActive: props.isActive ?? true,
      variants: props.variants || [],
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
  }

  public get id() { return this.props.id; }
  public get tenantId() { return this.props.tenantId; }
  public get name() { return this.props.name; }
  public get baseStock() { return this.props.baseStock; }
  public get variants() { return this.props.variants; }

  /**
   * Ajusta el stock de forma segura.
   * Si no hay variantes, ajusta el stock base.
   */
  public adjustStock(quantity: number, variantId?: string) {
    if (variantId) {
      const variant = this.props.variants.find(v => v.id === variantId);
      if (!variant) throw new Error('Variante no encontrada');
      
      if (variant.stock + quantity < 0) {
        throw new Error('Stock insuficiente en la variante');
      }
      variant.stock += quantity;
    } else {
      if (this.props.baseStock + quantity < 0) {
        throw new Error('Stock insuficiente en el producto base');
      }
      this.props.baseStock += quantity;
    }
    this.props.updatedAt = new Date();
  }

  public updatePrice(newPrice: number) {
    if (newPrice < 0) throw new Error('El precio no puede ser negativo');
    this.props.basePrice = newPrice;
    this.props.updatedAt = new Date();
  }

  public toJSON() {
    return {
      ...this.props,
      totalStock: this.props.variants.length > 0 
        ? this.props.variants.reduce((acc, v) => acc + v.stock, 0)
        : this.props.baseStock
    };
  }
}
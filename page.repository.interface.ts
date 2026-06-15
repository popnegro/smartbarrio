export interface IPageRepository {
  update(id: string, tenantId: string, data: any): Promise<void>;
  findById(id: string, tenantId: string): Promise<any | null>;
  findBySlug(slug: string, tenantId: string): Promise<any | null>;
}

export const IPageRepository = Symbol('IPageRepository');
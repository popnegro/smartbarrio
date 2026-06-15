import { z } from "zod";

export type BlockType = "hero" | "features" | "cta" | "faq" | "footer";

export const BlockSchema = z.object({
  id: z.string(),
  type: z.enum(["hero", "features", "cta", "faq", "footer"]),
  content: z.record(z.any()),
  style: z.object({
    paddingTop: z.string().optional(),
    paddingBottom: z.string().optional(),
    backgroundColor: z.string().optional(),
  }).optional(),
});

export type Block = z.infer<typeof BlockSchema>;

export interface LandingPageData {
  id?: string;
  title: string;
  slug: string;
  blocks: Block[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: string;
    keywords?: string[];
  };
  businessDetails?: {
    name: string;
    category: string;
    address: string;
    city: string;
    province: string;
    zipCode: string;
    coordinates?: { lat: number; lng: number };
  };
}

export const HeroBlockSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  buttonText: z.string(),
  imageUrl: z.string().optional(),
});

export type HeroBlockData = z.infer<typeof HeroBlockSchema>;
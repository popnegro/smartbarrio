import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BuilderCanvas } from "@/features/builder/components/builder-engine";

async function getPageData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/pages/${slug}`, {
    next: { revalidate: 3600 }, // Cache de 1 hora para performance
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageData(params.slug);
  if (!page) return {};

  const { seo, businessDetails } = page;
  const locationSuffix = businessDetails ? ` en ${businessDetails.city}, ${businessDetails.province}` : "";

  return {
    title: `${seo.metaTitle}${locationSuffix}`,
    description: seo.metaDescription,
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.slug}`,
    },
    robots: "index, follow",
  };
}

export default async function PublicLandingPage({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug);
  if (!page) notFound();

  // Esquema JSON-LD para LocalBusiness (SEO >= 100)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": page.businessDetails?.name || page.tenant.name,
    "image": page.seo.ogImage || page.tenant.logoUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": page.businessDetails?.address,
      "addressLocality": page.businessDetails?.city,
      "addressRegion": page.businessDetails?.province,
      "postalCode": page.businessDetails?.zipCode,
      "addressCountry": "AR"
    },
    "geo": page.businessDetails?.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": page.businessDetails.coordinates.lat,
      "longitude": page.businessDetails.coordinates.lng
    } : undefined,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/${params.slug}`,
    "telephone": page.tenant.phone
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumbs para navegación SEO */}
      <nav className="sr-only" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Inicio</a></li>
          <li><a href={`/categoria/${page.businessDetails?.category.toLowerCase()}`}>{page.businessDetails?.category}</a></li>
          <li aria-current="page">{page.businessDetails?.name}</li>
        </ol>
      </nav>

      <main>
        {/* Renderizado de la landing con los mismos componentes del builder pero sin modo edición */}
        <BuilderCanvas 
          blocks={page.content} 
          selectedId={null} 
          onSelect={() => {}} 
        />
        
        {/* Módulo de conversión flotante: WhatsApp & Review */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a href={`https://wa.me/${page.tenant.phone}`} className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
            {/* Icono de WhatsApp */}
          </a>
        </div>
      </main>
    </>
  );
}
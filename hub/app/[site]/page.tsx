import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Works from "@/components/site/Works";
import Services from "@/components/site/Services";
import Identity from "@/components/site/Identity";
import Testimonials from "@/components/site/Testimonials";
import Clients from "@/components/site/Clients";
import Footer from "@/components/site/Footer";
import FloatingUI from "@/components/site/FloatingUI";
import { siteThemeStyle } from "@/lib/site";
import { siteList, sites } from "@/sites";

type Params = { params: Promise<{ site: string }> };

// كل فولدر جوه sites/ فيه site.ts بيبقى صفحة على /<اسم الفولدر> تلقائيًا.
export function generateStaticParams() {
  return siteList.map(({ slug }) => ({ site: slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { site: slug } = await params;
  const site = sites[slug];
  if (!site) return {};
  return {
    title: site.brand.title,
    description: site.brand.description,
  };
}

export async function generateViewport({ params }: Params): Promise<Viewport> {
  const { site: slug } = await params;
  return { themeColor: sites[slug]?.theme.dark ?? "#0d0d0d" };
}

export default async function SitePage({ params }: Params) {
  const { site: slug } = await params;
  const site = sites[slug];
  if (!site) notFound();

  return (
    <div className="siteRoot" style={siteThemeStyle(site.theme)}>
      <Header site={site} />
      <main>
        <Hero projects={site.projects} />
        <About about={site.about} />
        <Works brand={site.brand} projects={site.projects} />
        <Services services={site.services} />
        <Identity identity={site.identity} />
        <Testimonials testimonials={site.testimonials} />
        <Clients clients={site.clients} />
      </main>
      <Footer contact={site.contact} />
      <FloatingUI contact={site.contact} slug={slug} />
    </div>
  );
}

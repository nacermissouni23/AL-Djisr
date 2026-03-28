import { siteConfig } from "@/content/site";
import type { Course } from "@/content/courses";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bab Ezzouar",
      addressRegion: "Alger",
      addressCountry: "DZ",
      streetAddress: siteConfig.address,
    },
    areaServed: ["Bab Ezzouar", "Alger"],
    sameAs: ["https://facebook.com", "https://instagram.com", "https://linkedin.com"],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: siteConfig.name,
    image: `${siteConfig.url}/favicon.ico`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Bab Ezzouar",
      addressRegion: "Alger",
      addressCountry: "DZ",
    },
    url: siteConfig.url,
    areaServed: ["Bab Ezzouar", "Alger"],
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function buildFaqSchema(
  items: {
    question: string;
    answer: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${input.slug}`,
    },
  };
}

export function buildCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    courseMode: course.format,
    teaches: [...course.skillsGained, ...course.whatYouWillLearn],
    url: `${siteConfig.url}/courses/${course.slug}`,
  };
}

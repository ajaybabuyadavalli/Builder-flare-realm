import { memo } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = memo(
  ({
    title = "Influbazzar - India's Premier Influencer Collaboration Platform",
    description = "Connect brands, creators, and agencies on India's most trusted influencer marketing platform. Join 25K+ verified creators and 100+ brands building meaningful collaborations.",
    keywords = "influencer marketing, creator economy, brand collaborations, social media marketing, India, content creators, campaigns",
    image = "/og-image.jpg",
    url = "https://influbazzar.com",
    type = "website",
  }: SEOHeadProps) => {
    // Since we're using Vite, we'll manage head through document
    if (typeof document !== "undefined") {
      document.title = title;

      // Update meta tags
      const updateMeta = (name: string, content: string) => {
        let meta = document.querySelector(
          `meta[name="${name}"]`,
        ) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement("meta");
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      const updateProperty = (property: string, content: string) => {
        let meta = document.querySelector(
          `meta[property="${property}"]`,
        ) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("property", property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      // Basic meta tags
      updateMeta("description", description);
      updateMeta("keywords", keywords);
      updateMeta("viewport", "width=device-width, initial-scale=1.0");

      // Open Graph tags
      updateProperty("og:title", title);
      updateProperty("og:description", description);
      updateProperty("og:image", image);
      updateProperty("og:url", url);
      updateProperty("og:type", type);
      updateProperty("og:site_name", "Influbazzar");

      // Twitter tags
      updateMeta("twitter:card", "summary_large_image");
      updateMeta("twitter:title", title);
      updateMeta("twitter:description", description);
      updateMeta("twitter:image", image);

      // Additional SEO tags
      updateMeta("robots", "index, follow");
      updateMeta("author", "Influbazzar Team");
      updateMeta("theme-color", "#8b5cf6");
    }

    return null;
  },
);

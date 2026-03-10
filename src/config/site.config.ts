import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  appStoreUrl: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  branding: {
    logo: {
      alt: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'VMFlux',
  description:
    'Professional Navisworks export tools for OBJ/MTL workflows, with GLB/glTF and properties export coming soon.',
  url: SITE_URL || 'https://vm-flux.com',
  ogImage: '/og-default.png',
  author: 'VMFlux',
  email: 'vmflux_hk@outlook.com',
  socialLinks: [],
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  appStoreUrl: 'https://apps.autodesk.com/',
  branding: {
    logo: {
      alt: 'VMFlux',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#0F3D91',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
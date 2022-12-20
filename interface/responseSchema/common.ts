export type HOME_PAGE_COMMON = {
  id?: number;
  logo?: string;
  favicon?: string;
  og_image?: string;
  address?: string;
  email_notifications?: { block_type?: string; value?: string }[];
  emails?: { block_type?: string; value?: string }[];
  hotline?: string;
  site?: number;
  social_icons?: {
    block_type?: string;
    value?: { icon?: string; link?: string };
  }[];
};

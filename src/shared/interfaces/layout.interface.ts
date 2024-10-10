type Link = {
  title: string;
  route: string;
};

export type NavigationLinks = {
  home: Link;
  "about-us": Link;
  services: Link;
  "contact-us": Link;
};

export type SocialMedia = {
  facebook: string;
  instagram: string;
  linkedin: string;
};

export interface ILayoutLinks {
  headerLinks: NavigationLinks;
  footerLinks: NavigationLinks;
  socialMedia: SocialMedia;
}

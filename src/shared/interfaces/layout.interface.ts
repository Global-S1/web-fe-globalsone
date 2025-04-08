type Link = {
  title: string;
  route: string;
};

export type NavigationLinks = {
  home: Link;
  aboutUs: Link;
  services: Link;
  contactUs: Link;
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

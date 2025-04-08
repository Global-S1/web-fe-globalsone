export type IAboutUsHeroContent = {
  title: string;
  description: string;
  hookSocialMedia: {
    title: string;
    links: ISocialMedia;
  };
};

export type IAboutUsOurValuesContent = {
  title: string;
  values: {
    title: string;
    content: string;
    img: string;
  }[];
};

export type IAboutUsOverviewContent = {
  title: string;
  content: string;
};

export type IAboutUsContent = {
  hero: IAboutUsHeroContent;
  ourValues: IAboutUsOurValuesContent;
  overview: IAboutUsOverviewContent[];
  testimonial: {
    title: string;
  };
};

export type ISocialMedia = {
  facebook: string;
  instagram: string;
  linkedin: string;
};

export interface IAboutUs {
  hero: IAboutUsHeroContent;
  ourValues: IAboutUsOurValuesContent;
  businessDescription: {
    desacription_1: IAboutUsOverviewContent;
    desacription_2: IAboutUsOverviewContent;
    desacription_3: IAboutUsOverviewContent;
  };
  testimonial: {
    title: string;
  };
}

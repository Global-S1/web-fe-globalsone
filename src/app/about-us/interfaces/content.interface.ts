export type IAboutUsHeroContent = {
  title: string;
  description: string;
};

export type IAboutUsOurValuesContent = {
  title: string;
  values: {
    title: string;
    content: string;
    img?: string;
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
};

export interface IAboutUs {
  hero: IAboutUsHeroContent;
  ourValues: IAboutUsOurValuesContent;
  businessDescription: {
    desacription_1: IAboutUsOverviewContent;
    desacription_2: IAboutUsOverviewContent;
    desacription_3: IAboutUsOverviewContent;
  };
}
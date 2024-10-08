export type IAboutUsHeroContent = {
  title: string;
  description: string;
};

export type IAboutUsOurValuesContent = {
  title: string;
  values: {
    label: string;
    description: string;
  }[];
};

export type IAboutUsOverviewContent = {
  title: string;
  description: string;
};

export type IAboutUsContent = {
  data: {
    hero: IAboutUsHeroContent;
    ourValues: IAboutUsOurValuesContent;
    overview: IAboutUsOverviewContent[];
  };
};

type TitleChunk = {
  text?: string;
  title?: string;
  style: string;
};

export type IFeature = {
  title: TitleChunk[];
  content: string;
  img?: string;
  reverse?: boolean;
};

export type IService = {
  title: string;
  img: string;
  alt?: string;
  content: string;
};

export interface IInside {
  metrics: {
    quantity: string;
    label: string;
  }[];
}

export interface IHomeHeroContent {
  title: {
    left: string;
    right: string;
  };
  insides: string;
}

export interface IWhathWeBuildContent {
  title: string;
  services: IService[];
}

export interface IOurTeam {
  title: string;
  description: string;
}

export interface IHomeContent {
  hero: IHomeHeroContent;
  features: IFeature[];
  whatwebuild: IWhathWeBuildContent;
  ourservice: IService[];
  contactus: string;
  ourteam: IOurTeam;
}

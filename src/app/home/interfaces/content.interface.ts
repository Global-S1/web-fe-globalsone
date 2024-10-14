export type TitleChunk = {
  text?: string;
  title?: string;
  styles: string;
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
  content?: string;
};

export interface IInside {
  clients: {
    label: string;
    quantity: string;
  };
  projects: {
    label: string;
    quantity: string;
  };
  yearsExperience: {
    label: string;
    quantity: string;
  };
}

export interface IHomeHeroContent {
  title: {
    left: string;
    right: string;
  };
}

export interface IWhathWeBuildContent {
  title: string;
  services: IService[];
}

export interface IOurTeam {
  title: string;
  description: string;
}

export interface IOurServices {
  title: string;
  services: IService[];
}

export interface IHomeContent {
  hero: IHomeHeroContent;
  insidesSection: string;
  features: IFeature[];
  whatwebuild: IWhathWeBuildContent;
  ourservice: IOurServices;
  testimonials: {
    title: string;
  };
  contactDescription: {
    title: string;
  };
  
}

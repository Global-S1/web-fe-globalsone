type TitleChunk = {
  text?: string;
  title?: string;
  styles: string;
};

type IFeature = {
  title: {
    chunk_1: TitleChunk;
    chunk_2: TitleChunk;
    chunk_3: TitleChunk;
    chunk_4: TitleChunk;
    chunk_5: TitleChunk;
    chunk_6?: TitleChunk;
    chunk_7?: TitleChunk;
  };
  content: string;
  img: boolean;
  reverse: boolean;
};

interface IHomeFeature {
  feature_1: IFeature;
  feature_2: IFeature;
  feature_3: IFeature;
}

type Service = {
  title: string;
  img: string;
  alt?: string;
  content: string;
};

interface IHomeHeroContent {
  title: {
    left: string;
    right: string;
  };
  insides: string;
}

export interface IHomeContentInput {
  hero: IHomeHeroContent;
  features: IHomeFeature;
  whatwebuild: {
    title: string;
    services: {
      service_1: Service;
      service_2: Service;
      service_3: Service;
      service_4: Service;
      service_5: Service;
    };
  };
  ourService: {
    title: string;
    services: {
      service_1: Service;
      service_2: Service;
      service_3: Service;
      service_4: Service;
    };
  };
  contactus: {
    title: string;
  };
  testimonials: {
    title: string;
  };
}

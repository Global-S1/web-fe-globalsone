export interface IMosaicTeamInput {
  title: string;
  description: string;
  mosaicImages: {
    [key: string]: {
      img: string;
      imageDescription: string;
    };
  };
}

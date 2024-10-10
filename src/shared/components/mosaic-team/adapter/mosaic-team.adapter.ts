import { IMosaicTeamContent } from "../interfaces/content";
import { IMosaicTeamInput } from "../interfaces/input.interface";

export const mosaicTeamAdapter = (
  data: IMosaicTeamInput
): IMosaicTeamContent => {
  return {
    title: data.title,
    description: data.description,
    mosaicImages: Object.values(data.mosaicImages).map(
      ({ imageDescription, img }) => ({
        img,
        alt: imageDescription,
      })
    ),
  };
};

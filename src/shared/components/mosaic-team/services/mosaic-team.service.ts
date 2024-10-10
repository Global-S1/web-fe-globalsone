import { wordpressService } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/posts-data.json";
import { IMosaicTeamInput } from "../interfaces/input.interface";
import { mosaicTeamAdapter } from "../adapter/mosaic-team.adapter";

export const getMosaicTeam = async () => {
  try {
    const response = await wordpressService<IMosaicTeamInput>({
      id: "392",
      page: "posts",
    });

    return mosaicTeamAdapter(response.data.acf);
  } catch (error) {
    return data;
  }
};

import data from "@/wp-mock-data/our-team-data.json";
import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import { ourTeamAdapter } from "../adapters/our-team.adapter";
import { IOurTeamInput } from "../interfaces/our-team.interface";

export const getOurTeam = async () => {
  try {
    const response = await WPGetDataByContentType<IOurTeamInput>({
      id: "358",
      contentType: "carousel",
    });
    return ourTeamAdapter(response.data.acf);
  } catch (error) {
    return data;
  }
};

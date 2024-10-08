import data from "@/wp-mock-data/our-team-data.json";
import { wordpressService } from "@/shared/services/wordpress.service";
import { ourTeamAdapter } from "../adapters/our-team.adapter";
import { IOurTeamInput } from "../interfaces/our-team.interface";

export const getOurTeam = async () => {
  try {
    const response = await wordpressService<IOurTeamInput>({
      id: "358",
      page: "carousel",
    });
    return ourTeamAdapter(response.data.acf);
  } catch (error) {
    return data;
  }
};

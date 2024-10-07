import { wordpressService } from "@/shared/services/wordpress.service";
import { people } from "@/data-mock/people.moc";
import { IPeople } from "@/shared/interfaces/IPeople";

export const getOurTeam = async () => {
  try {
    const response = await wordpressService<IPeople[]>({
      id: "",
      page: "carrucel",
    });
    return response.data.acf;
  } catch (error) {
    return people;
  }
};

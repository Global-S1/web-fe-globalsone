import {
  IOurTeamContent,
  IOurTeamInput,
  IOurTeamPersonContent,
} from "../interfaces/our-team.interface";

export const ourTeamAdapter = (data: IOurTeamInput): IOurTeamContent => {
  return {
    title: data.title,
    description: data.description,
    desktopImg: Object.values(data.desktopimg).filter(
      (i) => typeof i.img == "string"
    ) as IOurTeamPersonContent[],
    mobileImg: Object.values(data.mobileImg).filter((i) => !!i.img),
  };
};

export interface IOurTeamPersonInput {
  img: string | false;
  name: string;
  jobposition: string;
}

export interface IOurTeamPersonContent {
  img: string;
  name: string;
  jobposition: string;
}

export interface IOurTeamInput {
  title: string;
  description: string;
  desktopimg: {
    [key: string]: IOurTeamPersonInput;
  };
  mobileImg: {
    [key: string]: IOurTeamPersonContent;
  };
}

export interface IOurTeamContent {
  title: string;
  description: string;
  desktopImg: IOurTeamPersonContent[];
  mobileImg: IOurTeamPersonContent[];
}

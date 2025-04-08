interface SocialMedia {
  title: string;
  facebook: string;
  linkedin: string;
  instagram: string;
}

type ISuccesInput = {
  title: string;
  content: string;
  socialMedia: SocialMedia;
};

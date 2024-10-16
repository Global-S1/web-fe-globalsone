export const ThanksPageAdapter = (data: ISuccesInput): ISuccessContent => {
  return {
    title: data.title,
    description: data.content,
    socialMedia: data.socialMedia,
  };
};

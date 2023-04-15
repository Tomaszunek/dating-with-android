export const buildImagePath = (
  imageName: string,
  imageRoot: string,
  imageType = ".png"
) => `/usersImages/${imageRoot}/${imageName}${imageType}`;

export const formatProductNameForUrl = (name) => {
  return name.toLowerCase().replace(/ /g, "-");
};

export const formatUrlToProductName = (url) => {
  return url.replace(/-/g, " ");
};

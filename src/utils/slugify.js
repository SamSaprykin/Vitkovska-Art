export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing whitespace
  str = str.toLowerCase(); // convert to lowercase
  str = str.replace(/[^a-z0-9]+/g, "-"); // replace non-alphanumeric characters with dashes
  return str;
}

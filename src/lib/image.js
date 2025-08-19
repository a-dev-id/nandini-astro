import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./sanity.js";

const builder = imageUrlBuilder(sanity);
export const urlFor = (src) => builder.image(src);

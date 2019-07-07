import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder()

export function imageUrlFor(source) {
  return builder.image(source)
}

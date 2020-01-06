import { format } from "date-fns"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder({
  projectId: "ejaqflao",
  dataset: "production",
})

export const mapEdgesToNodes = (data: any) => {
  if (!data.edges) return []
  return data.edges.map((edge: any) => edge.node)
}

export const getBlogUrl = (publishedAt: string, slug: string) => {
  return `${format(new Date(publishedAt), "yyyy/MM")}/${slug}/`
}

export const urlFor = (source: string) => {
  return builder.image(source)
}

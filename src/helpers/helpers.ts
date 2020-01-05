import { format } from "date-fns"

export const mapEdgesToNodes = (data: any) => {
  if (!data.edges) return []
  return data.edges.map((edge: any) => edge.node)
}

export const getBlogUrl = (publishedAt: string, slug: string) => {
  return `${format(new Date(publishedAt), "yyyy/MM")}/${slug}/`
}

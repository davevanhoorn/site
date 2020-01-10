export default {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      title: "Finished",
      name: "finished",
      type: "boolean",
    },
    {
      name: "language",
      title: "Language",
      type: "reference",
      to: { type: "language" },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Social Media Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      options: {
        rows: 2,
      },
      validation: Rule =>
        Rule.required()
          .min(10)
          .max(120),
    },
  ],
}

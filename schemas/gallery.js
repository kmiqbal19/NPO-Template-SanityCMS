export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "imageurl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projecttitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "projectdate",
      title: "Project Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
  ],
};

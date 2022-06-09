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
      name: "projectfburl",
      title: "FB Url",
      type: "string",
    },
    {
      name: "projecttitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "projectdesc",
      title: "Project Description",
      type: "text",
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

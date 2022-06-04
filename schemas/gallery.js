export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
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
      name: "projectdate",
      title: "Project Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
  ],
};

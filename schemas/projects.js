export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    { name: "projectname", title: "Project Name", type: "string" },
    {
      name: "imageurl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectdate",
      title: "Project Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "projectdescription",
      title: "Project Description",
      type: "text",
      initialValue: "Type your description here..",
    },
    {
      name: "videolink",
      title: "Video Link",
      type: "string",
    },
  ],
};

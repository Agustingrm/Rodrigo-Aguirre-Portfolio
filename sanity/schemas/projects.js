export default {
  name: "projects",
  title: "Proyectos",
  type: "document",
  icon: () => "🚀",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "year",
      title: "Año",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Imagen de Portada",
      type: "image",
      description: "Esta imagen se vera en la vista preliminar en el cajon de Proyectos",
    },
    {
      name: "projectImages",
      title: "Imagenes de contenido",
      type: "array",
      of: [{ type: "image" }],
      description: "Estas imagenes se veran cuando hagas click y entres a cada proyecto en particular",
    },
    {
      name: "projectDescription",
      title: "Descripción",
      type: "array",
      of: [{ type: "string" }],
      description: "Cada linea escrita es un parrafo diferente",
    },
  ],
};

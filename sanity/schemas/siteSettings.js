export default {
  name: "siteSettings",
  title: "Configuración de visualización",
  type: "document",
  icon: () => `⚙️`,
  fields: [
    {
      name: "general",
      title: "Todos los proyectos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
      descriprion:
        "Una vez creado los proyectos elegir aqui si queres que se vean en la pagina o no y el orden",
    },
  ],
};

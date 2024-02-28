export default {
  config: {
    locales: ["ru", "de"],
     // Extend the translations
    translations: {
      ru: {
        "Auth.form.email.label": "Логин",
        Users: "Пользователь",
        City: "Город",

      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap(app: any) {
    console.log(app);
  },
};

export default {
  config: {
    locales: ["ru", "de"],
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
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

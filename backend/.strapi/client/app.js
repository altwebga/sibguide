/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import contentVersioning from "@notum-cz/strapi-plugin-content-versioning/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import duplicateButton from "strapi-plugin-duplicate-button/strapi-admin";
import entityRelationshipChart from "strapi-plugin-entity-relationship-chart/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.tsx";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    "content-versioning": contentVersioning,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "duplicate-button": duplicateButton,
    "entity-relationship-chart": entityRelationshipChart,
    "import-export-entries": importExportEntries,
    "multi-select": multiSelect,
  },
});

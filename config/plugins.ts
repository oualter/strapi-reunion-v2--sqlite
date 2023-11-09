export default {
  "image-pinpoint-generator": {
    enabled: false,
    resolve: "./src/plugins/image-pinpoint-generator",
  },
  "import-export-entries": {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: false,
    config: {
    //   deployHook:        "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
      apiToken: "lRIoQ1CYY0gA64iC6shBxbFU",
    //   appFilter: "your-app-name-on-vercel",
    //   teamFilter: "your-team-id-on-vercel",
    //   roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
};

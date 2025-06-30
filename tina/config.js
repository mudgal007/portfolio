import { defineConfig } from "tinacms";
import { about } from "./about";
import { employment } from "./employment";
import { personInfo } from "./personInfo";
import { education } from "./education";
import { servicesCard } from "./servicesCard";
import { services } from "./services";
import { project } from "./project";
import { projectCards } from "./projectCards";
import { contact } from "./contact";
import { blog } from "./blog";
import { authors } from "./authors";
import { categories } from "./categories";
import { blogCards } from "./blogCards";
import { socialLinks } from "./socialLinks";
import { footer } from "./footer";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/assets",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      about,
      education,
      employment,
      personInfo,
      servicesCard,
      services,
      project,
      projectCards,
      contact,
      blog,
      authors,
      categories,
      blogCards,
      socialLinks,
      footer,
      {
        name: "socialPlatform",
        label: "Social Platform",
        path: "src/content/socialPlatform",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "socialList",
            label: "Social List",
            list: true,
            fields: [
              {
                type: "string",
                name: "url",
                label: "URL",
              },
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "image",
                name: "Icon",
                label: "Icon",
              },
            ]
          },
        ]
      }
    ],
  },
});

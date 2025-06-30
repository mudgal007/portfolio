export const personInfo = {
    name: "personInfo",
    label: "Person Info",
    path: "src/content/personalInfo",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        }
    },
    fields: [
        {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
        },
        {
            type: "string",
            name: "title1",
            label: "Title 1",
            required: true,
        },
        {
            type: "string",
            name: "title2",
            label: "Title 2",
            required: true,
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
        },
        {
            type: "image",
            name: "resume",
            label: "Resume",
            required: true,
        },
        {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: true,
        },
        {
            type: "image",
            name: "heroImageMobile",
            label: "Hero Image Mobile",
            required: true,
        },
        {
            type: "image",
            name: "heroImageTransparent",
            label: "Hero Image Transparent",
            required: true,
        },
        {
            type: "string",
            name: "based",
            label: "Based",
            required: true,
        },
        {
            type: "string",
            name: "trustedBy",
            label: "Trusted By",
        },
        {
            name: "homePage",
            label: "Home Page",
            type: "string",
            component: "select",
            options: ["Home Page 1", "Home Page 2", "Home Page 3", "Home Page 4"],
            required: true,
        },
        {
            type: "object",
            name: "achievements",
            label: "Achievements",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "number",
                    label: "Number"
                },
                {
                    type: "string",
                    name: "text",
                    label: "Text"
                }
            ]
        },
        {
            type: "object",
            name: "clientsLogo",
            label: "Clients Logo",
            list: true,
            ui: {
                min: 4,
                max: 4
            },
            fields: [
                {
                    type: "string",
                    name: "alt",
                    label: "Alt",
                },
                {
                    type: "image",
                    name: "src",
                    label: "Source",
                }
            ]
        }
    ]
}
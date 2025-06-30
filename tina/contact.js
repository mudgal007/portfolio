export const contact = {
    name: "contact",
    label: "Contact",
    path: "src/content/contact",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        {
            type: "string",
            name: "text1",
            label: "Text 1",
            required: true,
        },
        {
            type: "string",
            name: "text2",
            label: "Text 2",
            required: true,
            isTitle: true,
        },
        {
            type: "string",
            name: "text3",
            label: "Text 3",
            required: true,
        },
        {
            type: "string",
            name: "text4",
            label: "Text 4",
            required: true,
        },
        {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            list: true,
            required: true,
            fields: [
                {
                    type: "image",
                    name: "icon",
                    label: "Icon",
                },
                {
                    type: "string",
                    name: "text",
                    label: "text",
                },
                {
                    type: "string",
                    name: "url",
                    label: "url",
                },
                {
                    type: "string",
                    name: "value",
                    label: "value",
                }
            ]
        }
    ],
}
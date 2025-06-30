export const footer = {
    name: "footer",
    label: "Footer",
    path: "src/content/footer",
    ui: {
        allowedActions: {
            create: false,
            delete: false
        }
    },
    fields: [
        {
            type: "string",
            name: "text1",
            label: "Text 1",
            required: true
        },
        {
            type: "string",
            name: "text2",
            label: "Text 2",
            required: true
        },
        {
            type: "string",
            name: "text3",
            label: "Text 3",
            required: true
        },
    ]
}
export const project = {
    name: "project",
    label: "Project",
    path: "src/content/project",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        }
    },
    fields: [
        {
            type: "string",
            name: "text1",
            label: "Text 1",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "text2",
            label: "Text 2",
            required: true,
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
    ],
}
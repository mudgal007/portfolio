export const servicesCard = {
    name: "servicesCard",
    label: "Services Card",
    path: "/src/content/servicesCard",
    fields: [
        {
            type: "string",
            name: "serviceName",
            label: "Service Name",
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
            name: "image",
            label: "Image",
            required: true,
        },
        {
            type: "object",
            name: "bulletPoints",
            label: "Bullet Points",
            list: true,
            required: true,
            ui: {
                min: 3,
                max: 3,
                allowedActions: {
                    create: false,
                    delete: false,
                }
            },
            fields: [
                {
                    type: "string",
                    name: "bulletPointName",
                    label: "Bullet Point Name",
                    required: true,
                }
            ]
        }
    ]
}
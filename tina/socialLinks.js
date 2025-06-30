export const socialLinks = {
    name: "socialLinks",
    label: "Social Links",
    path: "src/content/socialLinks",
    fields: [
        {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
        },
        {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
        },
        {
            type: "string",
            name: "name",
            label: "name",
            required: true,
            isTitle: true,
        }
    ]
}
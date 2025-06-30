export const authors = {
    name: "authors",
    label: "Authors",
    path: "src/content/authors",
    fields: [
        {
            name: "name",
            label: "Name",
            type: "string",
            isTitle: true,
            required: true,
        },
        {
            name: "image",
            label: "Image",
            type: "image",
            required: true,
        },
    ],
}
export const blogCards = {
    name: "blogCards",
    label: "Blog Cards",
    path: "src/content/blogCards",
    fields: [
        {
            type: "reference",
            name: "categories",
            label: "Categories",
            collections: ["categories"],
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
        },
        {
            type: "reference",
            name: "author",
            label: "Author",
            collections: ["authors"],
            required: true
        },
        {
            type: "datetime",
            name: "createdAt",
            label: "Created At",
            required: true
        },
        {
            type: "image",
            name: "image",
            label: "Image",
            required: true
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            required: true
        },
        {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true
        },
        {
            type: "object",
            name: "paragraphList",
            label: "Paragraph List",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "text",
                    label: "Text",
                }
            ]
        }
    ]
}
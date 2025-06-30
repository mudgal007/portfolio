export const projectCards = {
    name: "projectCards",
    label: "Project Cards",
    path: "src/content/projectCards",
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
            type: "image",
            name: "responsiveImage",
            label: "Responsive Image",
            required: true
        },
        {
            type: "image",
            name: "companyLogo",
            label: "Company Logo",
            required: true
        },
        {
            type: "string",
            name: "frontText",
            label: "Front Text",
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
            name: "projectConfig",
            label: "Project Config",
            list: true,
            ui: {
                min: 4,
                max: 4,
                allowedActions: {
                    create: false,
                    delete: false,
                }
            },
            fields: [
                {
                    type: "string",
                    name: "key",
                    label: "Key",
                    required: true
                },
                {
                    type: "string",
                    name: "value",
                    label: "value",
                    required: true
                }
            ]
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
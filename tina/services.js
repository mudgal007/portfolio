export const services = {
    name: "services",
    label: "Services",
    path: "/src/content/services",
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
            required: true,
            isTitle: true,
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
            name: "description",
            label: "description",
            required: true,
        },
        {
            type: "object",
            name: "listOfContent",
            label: "List of content",
            list: true,
            required: true,
            fields: [
                {
                    type: "string",
                    name: "Title",
                    label: "Title",
                    required: true,
                },
                {
                    type: "object",
                    name: "subTitles",
                    label: "Sub Titles",
                    list: true,
                    required: true,
                    fields: [
                        {
                            type: "string",
                            name: "subTitleName",
                            label: "Sub Title Name",
                            required: true,
                        }
                    ]
                }
            ]
        }
    ]
}
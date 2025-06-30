export const about = {
    name: "about",
    label: "About",
    path: "src/content/about",
    fields: [
        {
            type: "string",
            name: "text1",
            label: "Text 1",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "text2",
            label: "Text 2",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "text3",
            label: "Text 3",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "text4",
            label: "Text 4",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "text5",
            label: "Text 5",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "text6",
            label: "Text 6",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "skillsTitle1",
            label: "Skills Title 1",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "string",
            name: "skillsTitle2",
            label: "Skills Title 2",
            required: true,
            ui: {
                // Don't allow editors to create new items
                allowedActions: {
                    create: false,
                    delete: false,
                },
            }
        },
        {
            type: "object",
            name: "description",
            label: "Description",
            list: true,
            ui: {
                max: 3,
                min: 3,
                allowedActions: {
                    create: false,
                    delete: false,
                },
            },
            fields: [
                {
                    type: "number",
                    name: "number",
                    label: "Number",
                    required: true,
                },
                {
                    type: "string",
                    name: "title",
                    label: "title",
                    required: true,
                },
                {
                    type: "string",
                    name: "text",
                    label: "text",
                    required: true,
                },
            ]
        },
        {
            type: "object",
            name: "skill1",
            label: "Skill Set 1",
            list: true,
            ui: {
                // max: 3,
                // min: 3,
                allowedActions: {
                    create: false,
                    delete: false,
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                },
                {
                    type: "number",
                    name: "rate",
                    label: "Rate",
                    required: true,
                    ui: {
                        min: 1,
                        max: 5
                    }
                },
            ]
        },
        {
            type: "object",
            name: "skill2",
            label: "Skill Set 2",
            list: true,
            ui: {
                // max: 3,
                // min: 3,
                allowedActions: {
                    create: false,
                    delete: false,
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                },
                {
                    type: "number",
                    name: "rate",
                    label: "Rate",
                    required: true,
                    ui: {
                        min: 1,
                        max: 5
                    }
                },
            ]
        }
    ]
}
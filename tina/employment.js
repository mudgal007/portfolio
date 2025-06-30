export const employment = {
    name: "employment",
    label: "Employment",
    path: "src/content/employment",
    fields: [
        {
            type: "string",
            name: "company",
            label: "Company",
            required: true,
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
        },
        {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
        },
    ]
}
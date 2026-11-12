import { defineType, defineField } from "sanity"

export default defineType({
    name: 'carousel',
    title: 'Carousel',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'slides',
            title: 'Slides',
            type: 'array',
            options: {
                layout: 'grid'
            },
            of: [
                defineField({
                    name: 'slide',
                    title: 'Slide',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text'
                        })
                    ],
                    preview: {
                        select: {
                            title: 'alt',
                            media: 'image'
                        },
                        prepare({ title, media}) {
                            return {
                                title: title || 'Slide without Title',
                                media: media
                            }
                        }
                    },
                }),
            ],
        }),
    ]
}) 
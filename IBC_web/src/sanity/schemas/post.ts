import { defineType, defineField } from "sanity"

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField(
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'slug',
        title: 'Link',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
        }),
    defineField({
        name: 'content',
        title: 'Contenido',
        type: 'text',
        }),
    ],
})
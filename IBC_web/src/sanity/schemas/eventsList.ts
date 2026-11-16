import { defineType, defineField } from "sanity"

export default defineType({
    name: 'eventList',
    title: `Event's List`,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'dates',
            title: 'Dates',
            type: 'array',
            options: {
                layout: 'grid'
            },
            of: [
                defineField({
                    name: 'dateGroup',
                    title: 'DateGroup',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'date',
                            title: 'Date',
                            type: 'date',
                            validation: (Rule) => Rule.required()
                        }),
                        defineField({
                            name: 'events',
                            title: 'Events',
                            type: 'array',
                            of: [
                                defineField({
                                    name: 'event',
                                    title: 'Event',
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'title',
                                            title: 'Title',
                                            type: 'text',
                                            validation: (Rule) => Rule.required()
                                        }),
                                        defineField({
                                            name: 'datetime',
                                            title: 'Date and Time',
                                            type: 'datetime',
                                            options: {
                                                dateFormat: 'DD/MM/YYYY',
                                                timeFormat: 'HH:mm',
                                                timeStep: 15
                                            },
                                            validation: (Rule) => Rule.required().custom((value) => {
                                                    if (!value) return true 

                                                    const dateSelected = new Date(value)
                                                    const now = new Date()

                                                    if (dateSelected < now) {
                                                        return 'Invalid Date'
                                                    }
                                                    
                                                    return true 
                                                    })
                                        }),
                                        defineField({
                                            name: 'description',
                                            title: 'Description',
                                            type: 'text'
                                        })
                                    ],
                                    preview: {
                                        select: {
                                            title: 'title',
                                            subtitle: 'datatime'
                                        },
                                        prepare({ title, subtitle }) {
                                            return {
                                                title: title || 'Event without Title',
                                                subtitle: subtitle ? new Date(subtitle).toLocaleString() : 'No date selected'
                                            }
                                        }
                                    },
                                }),
                            ],
                            validation: (Rule) => Rule.required()
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'date',
                            events: 'events'
                        },
                        prepare({ title, events }) {
                            return {
                                title: title || 'Date without selection',
                                subtitle: `${events?.length || 0} events`
                            }
                        }
                    }
                })
            ],
        }),
    ]
}) 
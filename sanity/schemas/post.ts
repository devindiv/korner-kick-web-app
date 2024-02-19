export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the post',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'short description of the post',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'category',
      title: 'Post Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'featured',
      title: 'is this a featured post',
      type: 'boolean',
    },
  ],
}

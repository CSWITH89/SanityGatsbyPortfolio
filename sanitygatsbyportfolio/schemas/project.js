export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        }
      },
      {
        name: 'screenshotImage',
        title: 'Screenshot Image',
        type: 'image',
        options: {
            hotspot: true,
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'}
      },
    ],
  
    // preview: {
    //   select: {
    //     title: 'title',
    //     author: 'author.name',
    //     media: 'mainImage'
    //   },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`
    //     })
    //   }
    // }
  }
  
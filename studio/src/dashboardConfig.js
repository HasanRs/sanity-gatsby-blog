export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eea69327a7d8001ea10a4c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-begrt27d',
                  apiId: 'bdcbf013-1d56-4ab1-b184-f322e90f02a7'
                },
                {
                  buildHookId: '5eea69325de33e0276144021',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hebrcpmk',
                  apiId: 'b1f5e145-0535-4932-829c-9c1972581163'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HasanRs/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hebrcpmk.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

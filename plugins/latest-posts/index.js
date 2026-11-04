// Exposes the most recent blog posts of the current locale as global data,
// so the homepage can list them (the blog plugin does not expose its posts).
// Read on the client with: usePluginData('latest-posts')

const COUNT = 3;

export default function latestPostsPlugin() {
  return {
    name: 'latest-posts',

    async allContentLoaded({allContent, actions}) {
      const blogContent =
        allContent['docusaurus-plugin-content-blog']?.default;
      const posts = (blogContent?.blogPosts ?? [])
        .filter(
          ({metadata}) =>
            !metadata.unlisted && !metadata.frontMatter?.draft,
        )
        .slice(0, COUNT)
        .map(({metadata}) => ({
          title: metadata.title,
          description: metadata.description,
          date: metadata.date,
          permalink: metadata.permalink,
          readingTime: metadata.readingTime,
        }));

      actions.setGlobalData({posts});
    },
  };
}

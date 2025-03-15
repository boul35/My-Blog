/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Jean-Philippe Blog',
  author: 'Jean-Philippe Moffet',
  headerTitle: 'JP Moffet blog',
  description: 'My Random Posts',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://jpmoffet.site',
  //siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'jeanphilippemoffet@gmail.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-3S9GFH24T0',
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'utterances',
    utterancesConfig: {
      repo: 'boul35/my-blog',
      issueTerm: 'pathname',
      theme: 'github-light',
      darkTheme: 'github-dark',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

export default siteMetadata

const siteMetadata = {
  title: '시대생',
  author: '시대생팀',
  headerTitle: '시대생',
  description: '시대의 연결을 만들어갑니다.',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://uoslife.team',
  siteRepo: 'https://github.com/uoslife/uoslife-about',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'support@uoslife.team',
  github: 'https://github.com/uoslife-oss',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  locale: 'ko-KR',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: '',
    posthogAnalyticsId: '',
  },
  newsletter: {
    provider: 'buttondown', // mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
  },
  comment: {
    provider: 'giscus', // giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // pathname, url, title
      reactions: '1', // 1 = enable / 0 = disable
      metadata: '0', // 1 = enable / 0 = disable
      theme: 'light', // light, dark, dark_dimmed, dark_high_contrast, transparent_dark, preferred_color_scheme, custom
      inputPosition: 'bottom',
      lang: 'ko', // en, es, zh-CN, zh-TW, ko, ja etc
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // pathname, url, title
      label: '', // Comment 💬
      theme: '', // github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata

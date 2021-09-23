const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  title: 'Lando',
  description: 'The liberating local development tool for all your projects.',
  configureWebpack: config => {
    return {plugins: [
      new webpack.EnvironmentPlugin({
        LANDO_API: process.env.LANDO_API || 'https://api.lando.dev',
      }),
    ]};
  },
  extraWatchFiles: [
    '.vuepress/guides.json',
  ],
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Poppins:700|Source+Sans+Pro&display=swap'}],
    ['script', {src: '//js.hs-scripts.com/6478338.js'}],
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-74237404-5',
    },
    'autometa': {
      site: {
        name: 'Lando',
        twitter: 'devwithlando',
      },
      canonical_base: 'https://docs.lando.dev',
      image: 'https://lando.dev/images/logo-pink-medium.png',
    },
    'canonical': {
      baseURL: 'https://docs.lando.dev',
    },
    'feed': {
      canonical_base: 'https://docs.lando.dev',
      feed_options: {
        favicon: 'https://lando.dev/favicon.ico',
        image: 'https://lando.dev/images/logo-pink-small.png',
      },
      posts_directories: [
        '/guides/',
      ],
      count: 100,
    },
    'robots': {
      host: 'https://docs.lando.dev',
      sitemap: '/sitemap.xml',
    },
    'sitemap': {
      hostname: 'https://docs.lando.dev',
      exclude: ['/404.html'],
    },
  },
  themeConfig: {
    algolia: {
      apiKey: '15e332850128e9ec96929f44c62f6c88',
      indexName: 'lando',
      // uncomment the below to make styling inspection easier
      // debug: true,
    },
    docsDir: 'docs',
    docsBranch: 'master',
    logo: '/images/logo-pink-small.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Is this doc out of date? Suggest a change!',
    lastUpdated: 'Last Updated',
    nav: [
      {text: 'Getting Started', link: '/basics/'},
      {text: 'Config', link: '/config/lando.md'},
      {text: 'Guides', link: '/guides/lando-101/lando-overview'},
      {text: 'Help and Support', link: '/help/logs/'},
      {text: 'Contributing', link: '/contrib/contributing/'},
      {text: 'Blog', link: 'https://blog.lando.dev'},
      {text: 'Events & Meetups', link: 'https://events.lando.dev'},
    ],
    repo: 'lando/lando',
    sidebar: {
      '/basics/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'basics',
            'installation',
            'first-app',
            'updating',
            'uninstalling',
          ],
        },
        {
          title: 'Usage',
          collapsable: false,
          children: [
            'usage',
            'config',
            'destroy',
            'init',
            'info',
            'list',
            'logs',
            'poweroff',
            'rebuild',
            'restart',
            'share',
            'ssh',
            'start',
            'stop',
            'version',
          ],
        },
      ],
      '/config/': [
        {
          title: 'Core Config',
          collapsable: false,
          children: [
            'lando',
            'recipes',
            'services',
            'tooling',
            'proxy',
            'env',
            'events',
            'experimental',
            'networking',
            'performance',
            'plugins',
            'releases',
            'ssh',
            'security',
            'files',
            'global',
          ],
        },
        {
          title: 'Recipes',
          collapsable: false,
          children: [
            'acquia',
            'backdrop',
            'drupal6',
            'drupal7',
            'drupal8',
            'drupal9',
            'joomla',
            'lagoon',
            'laravel',
            'lamp',
            'lemp',
            'mean',
            'pantheon',
            'platformsh',
            'symfony',
            'wordpress',
          ],
        },
        {
          title: 'Services',
          collapsable: false,
          children: [
            'apache',
            'compose',
            'dotnet',
            'elasticsearch',
            'go',
            'mailhog',
            'mariadb',
            'memcached',
            'mongo',
            'mssql',
            'mysql',
            'nginx',
            'node',
            'php',
            'phpmyadmin',
            'postgres',
            'python',
            'redis',
            'ruby',
            'solr',
            'tomcat',
            'varnish',
          ],
        },
      ],
      '/guides/': JSON.parse(fs.readFileSync(require.resolve('./guides.json'))),
      '/help/': [
        {
          title: 'Troubleshooting',
          collapsable: false,
          children: [
            'logs',
            'wkbox',
            'updating',
          ],
        },
        {
          title: 'Known Issues',
          collapsable: false,
          children: [
            'dns-rebind',
            'win-file-upload',
            'file-sync',
            'win-also-vb',
            'proxy',
            'switching-dbs',
          ],
        },
        {
          title: 'Support',
          collapsable: false,
          children: [
            ['https://lando.dev/contact', 'Dedicated Support'],
            ['https://github.com/lando/lando/issues', 'GitHub issue queue'],
            ['https://launchpass.com/devwithlando', 'Slack - Official Lando'],
            ['https://www.drupal.org/slack', 'Slack - Drupal #lando channel'],
            ['https://www.youtube.com/channel/UCl_QBNuGJNoo7yH-n18K7Kg', 'YouTube Tutorials'],
            ['https://github.com/lando/cli/tree/main/examples', 'Code examples'],
            ['security', 'Security Issues'],
          ],
        },
        {
          title: 'Data',
          collapsable: false,
          children: [
            ['data', 'Privacy Policy for Humans'],
          ],
        },
        {
          title: 'Changelog',
          collapsable: false,
          children: [
            '2021-changelog',
            '2020-changelog',
            '2019-changelog',
            '2018-changelog',
            '2017-changelog',
          ],
        },
      ],
      '/contrib/': [
        {
          title: 'Getting Involved',
          collapsable: false,
          children: [
            'contributing',
            'comms',
            'activate',
            'first',
            'support',
          ],
        },
        {
          title: 'Governance',
          collapsable: false,
          children: [
            'gov',
            'vision',
            ['team', 'Current Team'],
            'roles',
            ['opensource', 'Resources'],
            ['https://docs.google.com/document/d/1aHcpAYIC50X82ul0_zZpvkprl97ZxsM-LXjq-zUK29Q/edit?usp=sharing', 'Minutes'],
            'roadmap',
          ],
        },
        {
          title: 'Evangelizing',
          collapsable: false,
          children: [
            'evangelist-intro',
            'evangelist-present',
            'evangelist-events',
            'evangelist-social',
            'evangelist-promote',
            'talking-points',
          ],
        },
        {
          title: 'Triaging Issues',
          collapsable: false,
          children: [
            'triage-getting-started',
          ],
        },
        {
          title: 'Writing Guides',
          collapsable: false,
          children: [
            'guides-intro',
            'guides-add',
            'guides-remove',
            'guides-promote',
            'guides-advanced',
          ],
        },
        {
          title: 'Contributing Code',
          collapsable: false,
          children: [
            'contrib-intro',
            'contrib-structure',
            'contrib-plugins',
            'contrib-testing',
            'contrib-building',
            'contrib-shipping',
            'contrib-docs',
            ['https://github.com/lando/sites', 'Events'],
            ['https://github.com/lando/metrics', 'Metrics'],
            ['https://github.com/lando/sites', 'Website'],
          ],
        },
        {
          title: 'Sponsoring',
          collapsable: false,
          children: [
            'sponsor-intro',
            'sponsor-upsell',
            'sponsor-faq',
          ],
        },
        {
          title: 'Administering',
          collapsable: false,
          children: [
            'admin-intro',
            'admin-onboarding',
            'admin-sponsors',
            'admin-timeline',
          ],
        },
      ],
    },
  },
};

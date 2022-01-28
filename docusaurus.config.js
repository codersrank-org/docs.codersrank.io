module.exports = {
  title: 'CodersRank Documentation',
  tagline: 'CodersRank tools and services documentation',
  url: 'https://docs.codersrank.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'codersrank-org', // Usually your GitHub org/user name.
  projectName: 'docs.codersrank.io', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-105624494-1',
    },
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'CodersRank Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Forum',
          href: 'https://forum.codersrank.io',
          position: 'right',
        },
        {
          href: 'https://github.com/codersrank-org/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Widgets',
              to: '/widgets/',
            },
            {
              label: 'API',
              to: '/api/',
            },
            {
              label: 'Repo Info Extractor',
              to: '/repo-info-extractor/repo-info-extractor/',
            },
            {
              label: 'Integrations',
              to: '/bitbucket-integration/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.codersrank.io',
            },
            {
              label: 'Slack chat',
              href:
                'https://codersrank.slack.com/join/shared_invite/enQtNDU5MTI1OTg3NTM2LWJlNWEyOTkxMWYwMTMwMDI2NjMzZWJiMTc0NTJkNDI2OWVkZmE5NjRlZGEyNDg0MTk2OTE5OTliZGM0NjUzYzc',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/codersrank-org/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/codersrank',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/codersrank',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.codersrank.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodersRank, Ltd.`,
    },
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/codersrank-org/docs.codersrank.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

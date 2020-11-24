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
              to: 'docs/widgets/activity-widget',
            },
            {
              label: 'API',
              to: 'docs/api/',
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
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/codersrank-org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodersRank, Ltd. Built with Docusaurus.`,
    },
  },
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

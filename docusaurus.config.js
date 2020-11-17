module.exports = {
  title: 'CodersRank Developers Portal',
  tagline: 'Tools and services for developers',
  url: 'https://developers.codersrank.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'codersrank-org', // Usually your GitHub org/user name.
  projectName: 'developers-portal', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Developers Portal',
      logo: {
        alt: 'CodersRank Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
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
              to: 'docs/',
            },
            {
              label: 'Widgets',
              to: 'docs/widgets/activity-widget',
            },
            {
              label: 'API',
              to: 'docs/api/introduction',
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
              label: 'Blog',
              to: 'blog',
            },
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/codersrank-org/developers-portal/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/codersrank-org/developers-portal/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

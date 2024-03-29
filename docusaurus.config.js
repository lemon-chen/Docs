// @ts-check
const path = require('path');
const theme = require('shiki/themes/material-palenight.json');
const { remarkCodeHike } = require('@code-hike/mdx');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agora Documentation',
  tagline:
    'Agora NG Sdk  is built for Live, interactive voice and video powered by the only global network dedicated to real-time engagement at ease.',
  url: 'https://agora-ngdocs.vercel.app/',
  baseUrl: '/',
  staticDirectories: ['public', 'static', 'docs/assets'],
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'agora',
  projectName: 'ng-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false
      }
    ],
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@docs': path.resolve(__dirname, 'docs'),
          '@app': path.resolve(__dirname, 'src')
        }
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          beforeDefaultRemarkPlugins: [
            [remarkCodeHike, { theme, showCopyButton: true, lineNumbers: true }]
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          exclude: ['assets/**', 'shared/**'],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          routeBasePath: '/samples',
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: [
            require.resolve('@code-hike/mdx/styles.css'),
            require.resolve('./src/scss/app.scss')
          ]
        }
      })
    ]
  ],

  themes: ['mdx-v2', 'docusaurus-theme-frontmatter'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'beta',
        content: 'This site is currently under development.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true
      },
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: 'search'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: 'Developer Center',
        logo: {
          alt: 'Agora Logo',
          src: 'img/agora-logo.svg'
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Docs'
          },
          { to: '/samples', label: 'Samples', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Menu',
            items: [
              {
                label: 'Docs',
                to: '/examples'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Samples',
                to: '/samples'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agora, Inc. Build.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;

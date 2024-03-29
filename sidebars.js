const widgets = require('./src/widgets/widgets.json');
const repoInfoExtractor = require('./src/repo-info-extractor/repo-info-extractor.json');

const widgetDocs = Object.keys(widgets).map((repo) => `widgets/${repo}`);

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Widgets',
      items: ['widgets/getting-started', ...widgetDocs],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/introduction', 'api/endpoints'],
    },
    {
      type: 'doc',
      id: 'repo-info-extractor/repo-info-extractor',
    },
    {
      type: 'category',
      label: 'Integrations',
      items: ['integrations/bitbucket-integration'],
    },
  ],
};

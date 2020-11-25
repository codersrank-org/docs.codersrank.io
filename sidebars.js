const widgets = require('./src/widgets/widgets.json');

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
      items: ['api/introduction'],
    },
    {
      type: 'category',
      label: 'Repo Info Extractor',
      items: ['repo-info-extractor/introduction'],
    },
  ],
};

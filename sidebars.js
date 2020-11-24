module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Widgets',
      items: [
        'widgets/activity-widget',
        'widgets/education-widget',
        'widgets/portfolio-widget',
        'widgets/skills-chart-widget',
        'widgets/summary-widget',
        'widgets/work-experience-widget',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/introduction'],
    },
    {
      type: 'category',
      label: 'Repo Info Extractor',
      items: ['repo_info_extractor/introduction'],
    },
  ],
};

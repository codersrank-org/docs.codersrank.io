const buildRepoInfoExtractorDocs = require('./build-repo-info-extractor');
const buildWidgetDocs = require('./build-widget-docs');

const build = () => {
  buildWidgetDocs();
  buildRepoInfoExtractorDocs();
};

build();

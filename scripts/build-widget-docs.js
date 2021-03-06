const fs = require('fs');
const http = require('https');
const path = require('path');
const widgets = require('../src/widgets/widgets.json');

const fetchFile = (url) =>
  new Promise((resolve, reject) => {
    http.get(url).on('response', function (response) {
      let body = '';
      response.on('data', function (chunk) {
        body += chunk;
      });
      response.on('end', function () {
        resolve(body);
      });
      response.on('error', function (err) {
        reject(err);
      });
    });
  });

const buildWidgetDocs = async () => {
  Object.keys(widgets).forEach(async (repo) => {
    const branch = widgets[repo];
    let remoteContent = await fetchFile(
      `https://raw.githubusercontent.com/codersrank-org/${repo}/${branch}/README.md`,
    );
    if (remoteContent.indexOf('<!-- DOCS_START -->') >= 0) {
      remoteContent = remoteContent.split('<!-- DOCS_START -->')[1];
    }
    if (remoteContent.indexOf('<img src="preview.png" />') >= 0) {
      remoteContent = remoteContent.replace(
        '<img src="preview.png" />',
        `<img className="widget-docs-preview-image" src="https://raw.githubusercontent.com/codersrank-org/${repo}/${branch}/preview.png" />`,
      );
    }
    let localContent = fs.readFileSync(
      path.resolve(__dirname, `../src/widgets/${repo}.md`),
      'utf-8',
    );
    if (localContent.indexOf('<!-- DOCS_START -->') >= 0) {
      localContent = localContent.split('<!-- DOCS_START -->')[0];
      localContent = `${localContent}<!-- DOCS_START -->${remoteContent}`;
    }
    fs.writeFileSync(path.resolve(__dirname, `../docs/widgets/${repo}.md`), localContent);
  });
};

module.exports = buildWidgetDocs;

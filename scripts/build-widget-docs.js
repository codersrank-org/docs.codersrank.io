const fs = require('fs');
const http = require('https');
const path = require('path');

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
  const repos = [
    'activity-widget',
    'skills-chart-widget',
    'summary-widget',
    'work-experience-widget',
  ];
  const branches = ['main', 'main', 'master', 'master'];
  repos.forEach(async (repo, index) => {
    const branch = branches[index];
    let remoteContent = await fetchFile(
      `https://raw.githubusercontent.com/codersrank-org/${repo}/${branch}/README.md`,
    );
    if (remoteContent.indexOf('<!-- DOCS_START -->') >= 0) {
      remoteContent = remoteContent.split('<!-- DOCS_START -->')[1];
    }
    if (remoteContent.indexOf('<img src="preview.png" />') >= 0) {
      remoteContent = remoteContent.replace(
        '<img src="preview.png" />',
        `<img src="https://raw.githubusercontent.com/codersrank-org/${repo}/${branch}/preview.png" />`,
      );
    }
    const filePath = path.resolve(__dirname, `../docs/widgets/${repo}.md`);
    let localContent = fs.readFileSync(filePath, 'utf-8');
    if (localContent.indexOf('<!-- DOCS_START -->') >= 0) {
      localContent = localContent.split('<!-- DOCS_START -->')[0];
      localContent = `${localContent}\n<!-- DOCS_START -->\n${remoteContent}`;
    }
    fs.writeFileSync(filePath, localContent);
  });
};

module.exports = buildWidgetDocs;

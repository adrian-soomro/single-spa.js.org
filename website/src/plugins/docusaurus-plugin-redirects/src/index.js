const path = require('path');
const fs = require('fs');

const DEFAULT_OPTIONS = {
  excludedPaths: [],
};

module.exports = function(context, opts) {
  const options = { ...DEFAULT_OPTIONS, ...opts };

  return {
    name: 'docusaurus-plugin-redirects',

    async postBuild({ siteConfig = {}, routesPaths = [], outDir }) {
      routesPaths.map(routesPath => {
        if (!path.isAbsolute(routesPath)) {
          return;
        }

        if (options.excludedPaths.includes(routesPath)) {
          return;
        }

        const newLink = `${siteConfig.url}${routesPath}${
          routesPath.endsWith('/') ? '' : '/'
        }`;
        const fileName = path.basename(routesPath);
        const filePath = path.dirname(routesPath);
        const htmlContent = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <script>
        const redirectLink = '${newLink}' + location.search;
        document.write('\n<meta http-equiv="refresh" content="0; url="' + redirectLink + '">');
        document.write('\n<link rel="canonical" href="' + redirectLink + '">');
        document.write('\n<title>Redirecting to ' + redirectLink + '</title>');
        document.write('\n</head>')
        document.write('\n<body>')
        document.write('\nIf you are not redirected automatically, follow this <a href="' + redirectLink + '">link</a>.')
        document.write('\n</body>')
    </script>
</html>
        `;

        const oldPagePath = path.join(
          outDir.concat(filePath),
          `${fileName}.html`,
        );
        fs.writeFile(oldPagePath, htmlContent, err => {
          if (err) {
            throw new Error(`File creating error: ${err}`);
          }
        });
      });
    },
  };
};
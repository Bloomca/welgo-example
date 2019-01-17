const html = require("../utils/html");

module.exports = function Page({ children }) {
  return html`
    <html>
      <head>
        <title>Welgo example app</title>
      </head>
      <body>
        ${children}
      </body>
    </html>
  `;
};

const Page = require("./page");
const html = require("../utils/html");

module.exports = function NotFoundPage() {
  return html`
    <${Page}>
      <h1>Not Found!</h1>
      <p>
        Sorry, page you were looking for does not exist. You can go to the main
        page:
      </p>
      <a href="/">Main page</a>
    <//>
  `;
};

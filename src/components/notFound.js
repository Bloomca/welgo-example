const Welgo = require("welgo");
const html = require("../utils/html");

module.exports = function NotFoundPage() {
  return html`
    <${Welgo.Fragment}>
      <h1>Not Found!</h1>
      <p>
        Sorry, page you were looking for does not exist. You can go to the main
        page:
      </p>
      <a href="/">Main page</a>
    <//>
  `;
};

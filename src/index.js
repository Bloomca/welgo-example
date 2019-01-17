const express = require("express");
const { render } = require("welgo");
const Stories = require("./components/stories");

const api = require("./utils/api");
const html = require("./utils/html");

const app = express();

app.get("/", async (req, res) => {
  const page = await render(
    html`
      <${Stories} page=${req.query.page} />
    `,
    api
  );
  res.send(page);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`application started at http://localhost:${PORT}`);
});

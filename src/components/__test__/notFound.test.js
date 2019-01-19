const html = require("../../utils/html");
const NotFound = require("../notFound");

const { shallow } = require("weltest");

test("<NotFound /> should have a link to the main page", async () => {
  const wrapper = await shallow(
    html`
      <${NotFound} />
    `
  );

  const link = wrapper.find("a")[0];

  expect(link).toBeTruthy();

  expect(link.getAttribute("href")).toBe("/");
});

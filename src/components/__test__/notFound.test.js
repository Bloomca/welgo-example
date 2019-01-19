const html = require("../../utils/html");
const NotFound = require("../notFound");

const { mount } = require("weltest");

test("<NotFound /> should have a link to the main page", async () => {
  const wrapper = await mount(
    html`
      <${NotFound} />
    `
  );

  const link = wrapper.find("a")[0];

  expect(link).toBeTruthy();

  expect(link.getAttribute("href")).toBe("/");
});

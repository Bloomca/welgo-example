const html = require("../../utils/html");
const Stories = require("../stories");
const Story = require("../storyItem");

const { shallow } = require("weltest");

test("<Stories /> renders 5 stories", async () => {
  const getStories = async function getStories() {
    return [1, 2, 3, 4, 5];
  };
  const wrapper = await shallow(
    html`
      <${Stories} />
    `,
    { getStories }
  );

  expect(wrapper.find(Story)).toHaveLength(5);
});

test("<Stories /> has a link to the next page", async () => {
  const getStories = async function getStories() {
    return [1, 2, 3, 4, 5];
  };
  const wrapper = await shallow(
    html`
      <${Stories} page=${3} />
    `,
    { getStories }
  );

  const link = wrapper.find("a")[0];

  expect(link).toBeTruthy();

  expect(link.getAttribute("href")).toBe("/?page=4");
});

const html = require("../utils/html");

const PAGE_SIZE = 30;

module.exports = async ({ page = 1 }, { getStories }) => {
  const stories = await getStories();

  const offset = (page - 1) * PAGE_SIZE;
  const renderingStories = stories.slice(offset, offset + PAGE_SIZE);

  const storiesMarkup = renderingStories.map(
    id =>
      html`
        <${Story} id="{${id}}" />
      `
  );

  const nextURL = `/?page=${Number(page) + 1}`;

  return html`
    <div>
      <ul>
        ${storiesMarkup}
      </ul>
      <a href="${nextURL}">More</a>
    </div>
  `;
};

async function Story({ id }, { getStory }) {
  const story = await getStory(id);

  if (story) {
    return html`
      <li>${story.title}</li>
    `;
  }
}

const html = require("../utils/html");

module.exports = async function Story({ id }, { getStory }) {
  const story = await getStory(id);

  if (story) {
    return html`
      <li>${story.title}</li>
    `;
  }
};

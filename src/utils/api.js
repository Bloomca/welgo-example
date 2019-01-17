const { request } = require("https");

module.exports.getStories = getStories;
module.exports.getStory = getStory;

function getStories() {
  return hnRequest("/newstories.json");
}

function getStory(id) {
  return hnRequest(`/item/${id}.json`);
}

// only JSON requests
function hnRequest(url) {
  return new Promise((resolve, reject) => {
    const req = request(
      {
        method: "GET",
        host: "hacker-news.firebaseio.com",
        path: `/v0${url}`
      },
      res => {
        const statusCode = res.statusCode;
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding("utf8");
        let data = "";
        res.on("data", chunk => {
          data += chunk;
        });
        res.on("end", () => {
          let parsedData = data;
          try {
            parsedData = JSON.parse(data);
          } catch (e) {
            // pass
          }

          if (statusCode === 200) {
            resolve(parsedData);
          } else {
            reject(parsedData);
          }
        });
      }
    );

    req.on("error", e => {
      console.error(`problem with request: ${e.message}`);
      reject();
    });
    req.end();
  });
}

const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track || "backend";

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = dayOfWeek[new Date().getDay()];

  const now = new Date();
  // const utcTime = new Date(
  //   now.getTime() + (now.getTimezoneOffset() + 120) * 6000
  // ).toISOString();
  // const utcTime = new Date().toISOString();
  const utcTime = new Date().toISOString().slice(0, 19) + 'Z';

  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: "https://github.com/elijaharhinful/hng-backend-project1/blob/main/index.js",
    github_repo_url: "https://github.com/elijaharhinful/hng-backend-project1",
    status_code: 200,
  };

  res.json(jsonResponse);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {});
console.log(`Server is running on http://localhost:${port}`);

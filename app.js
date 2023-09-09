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
  const utcTime = new Date(
    now.getTime() + (now.getTimezoneOffset() + 120) * 6000
  ).toISOString();

  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: "url",
    github_repo_url: "url",
    status_code: 200,
  };

  res.json(jsonResponse);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {});
console.log(`Server is running on http://localhost:${port}`);

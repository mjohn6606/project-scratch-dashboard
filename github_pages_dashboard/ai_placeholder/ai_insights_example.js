// ai_insights_example.js - simple Node/Express insight function
const express = require('express');
const app = express();
app.use(express.json());
app.post('/insights', (req, res) => {
  const stats = req.body || {};
  const insights = [];
  if(stats.puttsAvg && stats.puttsAvg > 33) insights.push('Putting: average putts high; prioritize 3-ft makes & lag control.');
  if(stats.sevenDispersion && stats.sevenDispersion > 12) insights.push('7-iron dispersion wide; do impact-location drills and track impact.');
  if(stats.updownPercent && stats.updownPercent < 40) insights.push('Short game: Up & Down below 40% — add focused 30-min green-side sessions.');
  res.json({insights, summary: insights.join(' ') || 'No urgent insights.'});
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('AI insights server running on', port));
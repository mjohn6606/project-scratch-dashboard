// api/insights.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let stats;
  try {
    stats = req.method === 'POST' ? req.body : null;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON.' });
  }

  if (!stats) {
    return res.status(400).json({ error: 'Missing stats JSON.' });
  }

  const insights = [];
  if (stats.puttsAvg > 33) insights.push('Improve putting: focus on 3-ft makes and lag speed.');
  if (stats.sevenDispersion > 12) insights.push('7-iron dispersion wide: practice center-face strikes.');
  if (stats.updownPercent < 40) insights.push('Short game: increase greenside consistency.');
  if (stats.driverFairways < 70) insights.push('Driving accuracy below 70%. Work on alignment and tempo.');

  if (insights.length === 0) insights.push('Keep up the strong performance!');

  res.status(200).json({ summary: insights.join(' ') });
}

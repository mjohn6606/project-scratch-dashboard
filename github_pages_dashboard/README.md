Project Scratch — GitHub Pages Dashboard + AI placeholders

Contents:
- index.html (dashboard)
- data/schema.json (JSON schema model for stats)
- data/stats.json (sample stats)
- ai_placeholder/ai_insights_example.js (Node example for serverless AI insights)

Deploy:
1) Commit repo to GitHub and enable GitHub Pages at root branch.
2) Update data/stats.json with your exported Rapsodo data and round logs.
3) Optional: Deploy ai_placeholder to Vercel/Netlify as a serverless function and point index.html's window.fetchAI to call it.
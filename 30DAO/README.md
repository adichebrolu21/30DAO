# 30DAO

Meal plan -> grocery list -> cheapest cart. Next.js project.

## Structure
- `public/app.html` - the whole app UI and logic (served at `/`).
- `app/api/prices/route.js` - price service the UI calls. Sample data now; swap `getPrices()` for a real source.
- `app/api/stores/route.js` - nearby store lookup for the location button. Sample data now.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Working together (git)
```
git checkout -b my-change     # never work directly on main
# edit files, then
git add -A && git commit -m "what I changed"
git push -u origin my-change  # then open a Pull Request on GitHub
```
The other person reviews the pull request, then merges it. Vercel redeploys main automatically once the repo is connected.

## Ideas / TODO
- Real prices and real store lookup (the API routes above)
- Split app.html into React components
- Accounts and saved plans (e.g. Supabase)
- WhatsApp share button, analytics, PWA install support
- Bigger verified meal and nutrition database
- Never commit API keys; use Vercel Environment Variables

# 💪FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion. Browse a library of twelve lifts, open a detail page, lock lifts into today's plan, save others for later, and watch minutes and calories add up live.

##🛠 Technologies

⚛️ Next.js 14 (App Router)
⚛️ React 18
🎨 Tailwind CSS 3
🖼️ lucide-react icons
🔤 Oswald + Inter (Google Fonts)
☁️ Deployed on Vercel

##✨ Features

📱 Responsive library — 3-column grid on desktop that collapses to 2 and 1 on tablet and mobile.
🔽 Sort on My Plan — sort your plan or saved list by Duration, Calories, or Rating.
📄 Workout detail pages — key specs, numbered instructions, and add/save actions with toast feedback.
📝 My Plan log — Today's Plan and Saved tabs with live Exercises / Minutes / Calories metrics.
🔔 Live navbar counters — Plan and Saved badges update instantly and link to /my-plan.
💾 Persistence & limits — plan and saved data survive reloads (localStorage); Plan is capped at five lifts.
✨ Polish — loading spinner, empty states, custom 404 page.
## 🚀Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 🔌API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## 🔗 Links

- Live: https://fitlog-nextjs.vercel.app/
- Repo: https://github.com/shekhtalha7-source/Assignment-6

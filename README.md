<div align="center">

<br>

# 30DAO

**Plan the week. Build the list. Buy it cheapest.**

A meal planner that turns your diet, calories and protein goals into a weekly grocery list, then finds the cheapest way to buy it.

<br>

![status](https://img.shields.io/badge/status-prototype-f5a524?style=flat-square)
![next.js](https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs)
![vercel](https://img.shields.io/badge/vercel-000000?style=flat-square&logo=vercel)
![prices](https://img.shields.io/badge/prices-sample%20data-9ca3af?style=flat-square)

[**Live demo**](https://30dao-adi-7b15.vercel.app)

<br>

</div>

<!-- Add a screenshot here:  ![30DAO screenshot](docs/screenshot.png) -->

---

## Features

**Plan**
- Seven days of breakfast, lunch and dinner, scaled to your calorie target
- Protein-aware picks that follow your protein-to-calorie ratio
- Veg, egg or non-veg, with North or South Indian cuisine
- Allergy filters for dairy, peanuts, soy and egg
- Lock the meals you like, swap or reshuffle the rest

**Shop**
- One grocery list, totalled for the week and rounded to real pack sizes
- Price comparison across Blinkit, Zepto, BigBasket and a local supermarket
- Single store, best two-store split, or cheapest per item, with delivery fees and free-delivery thresholds
- Optimise for lowest price, fewest orders or fastest delivery
- Mark what you already have at home and it drops out of the basket
- Budget bar that shows whether you are under or over

## How it works

```
preferences  →  weekly plan  →  grocery list  →  price comparison  →  cheapest cart
```

1. Each meal slot is filled from meals that match your diet, cuisine and allergies.
2. Portions are scaled per day to reach your calorie target.
3. Ingredients are added up and rounded up to pack sizes.
4. Prices load from `/api/prices`. Every store and store combination is tested, delivery fees are added, and the best option for your priority is recommended.

## Status

30DAO is an early prototype.

| Area | State |
|---|---|
| Meal planner, grocery list, comparison logic | Working |
| Prices | **Sample data.** Blinkit, Zepto and BigBasket have no public price APIs |
| Nearby stores | **Sample list.** The location button reads coordinates only |
| Nutrition | Estimates for about 20 meals. Not medical or dietary advice |
| Accounts and saved plans | Not built |

## Getting started

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone <your-repo-url>
cd 30DAO
npm install
npm run dev
```

Then open <http://localhost:3000>.

To deploy, push to GitHub and import the repo on [Vercel](https://vercel.com). Every push to `main` goes live automatically.

## Project structure

```
30DAO/
├── public/
│   └── app.html              UI, meal planner and price comparison
├── app/
│   ├── layout.js             Page title and layout
│   └── api/
│       ├── prices/route.js   Price service (sample data)
│       └── stores/route.js   Store lookup (sample data)
├── next.config.mjs           Serves app.html at /
└── package.json
```

## Roadmap

- [ ] Real prices through a backend, partner feed or affiliate programme
- [ ] Real nearby-store lookup
- [ ] Components instead of a single HTML file
- [ ] Accounts and saved plans
- [ ] Larger, verified meal and nutrition database
- [ ] Vegan option, more macros, family profiles
- [ ] WhatsApp sharing and printable plans
- [ ] Installable web app, then iOS and Android

## Contributing

```bash
git checkout -b my-change
git commit -am "Describe your change"
git push -u origin my-change
```

Open a pull request and get a review before merging into `main`. Keep API keys out of the repo and use Vercel environment variables instead.

## License

Not chosen yet. Add one, for example MIT, before making the repo public.

<br>

<div align="center"><sub>Built in India</sub></div>

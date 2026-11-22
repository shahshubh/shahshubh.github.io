# shahshubh.github.io

## Updating work experience

Edit `work_exp.json` on the `source` branch. The site fetches this file directly on every visit,
using a cache-busting parameter. Committing a JSON change updates the displayed experience
without rebuilding or redeploying the site. `public/work_experience.json` is the fallback if the
live source is unavailable.

Each entry supports:

- `role`, `company`, and `time`
- `description` as an array of bullet points
- `skills` as an array
- `icon`: `work`, `github`, `react`, or `education`
- `iconBackgroundColor`, `iconColor`, and `borderTopColor`
- optional `link`

Keep the entries in newest-to-oldest order.
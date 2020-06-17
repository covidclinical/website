---
type: plot
title: Case Rate by Country
subtitle: Comparison to data from JHU CSSE
category: Other
notebook: 06_case_rate_by_country_7_day_avg_altair.ipynb
binder: true
order: 70
plots:
    - vega/plot_daily-count_country-level-rate-of-positive-cases.json
---

The plots on this page display 7-day average of the adjusted rate of change in `New positive cases` by country, comparing the rates of 4CE daily counts to the country-level confirmed case data provided by [Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE)](https://systems.jhu.edu/research/public-health/ncov/).

### How to use

- Zooming and panning is allowed using mouse wheel and dragging. Double-clicking on a white space resets the x- and y-axes to the original settings.

- Clicking `4CE` or `JHU CSSE` in the legend will toggle the corresponding lines in the plots. Clicking in the legend white space resets the lines to the original settings.

- To download the figure click the button with the ellipsis in the top right corner and choose either "Save as SVG" or "Save as PNG". The figure will be saved reflecting the current state.

### Note

In some cases, the data reported by sites contained outliers or possibly incorrect units. These values were not removed from the visualizations to maintain the integrity of the data.
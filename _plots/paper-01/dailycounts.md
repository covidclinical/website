---
title: Daily Counts by Country
subtitle: Positive cases and new deaths over time by country
category: Daily Counts
notebook: 02_daily_counts_altair.ipynb
release: paper-01
order: 1
plots:
    Daily Counts:
        - vega/plot_daily-count_daily-counts-by-country.json
    Cumulative Daily Counts:
        - vega/plot_daily-count_cumulative-daily-counts-by-country.json
---

The plots on this page display positive cases, new deaths, ICU admissions over time by country.

### How to use

- One of `New positive cases` or `New deaths` can be selected using the drop down menu below each plot.

- Zooming and panning is allowed using mouse wheel and dragging. Double-clicking on a white space resets the x- and y-axes to the original settings.

### Note

In some cases, the data reported by sites contained outliers or possibly incorrect units. These values were not removed from the visualizations to maintain the integrity of the data.
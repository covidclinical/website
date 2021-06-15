---
type: plot
title: "Daily Counts"
subtitle: Counts of pediatric patients hospitalized over time, with country-level comparisons.
category: Daily Counts
notebook: 1.1.17_daily_counts_pediatric_with_country_rate.ipynb
tag: v1.1-pediatrics-0
binder: false
order: 10
plots:
    - vega/plot_daily-counts-pediatric_new-hospitalized-patients-by-country-with-country-rate.json
    - vega/plot_daily-counts-pediatric_new-hospitalized-patients-by-country-with-country-rate-and-dropdown.json
---

The plots on this page display the number of pediatric patients over time by country. Both plots display the same data, but the lower plot highlights one country at a time.


#### Legend
Top row of each plot: number of new hospitalized pediatric patients per day in 4CE hospitals, as a rolling 14-day mean, aggregated by country.

Middle row of each plot: number of new hospitalized pediatric patients per day at the country level. For France, daily pediatric hospitalization data were obtained from Santé Publique France. For Germany, weekly pediatric hospitalization data were obtained from the German Society for Pediatric Infectious Diseases. For Spain, weekly pediatric hospitalization data were obtained from the Spanish National Epidemiological Surveillance Network (RENAVE), which lacks hospitalization counts between May 11 and July 15, 2020. For the UK, daily pediatric hospitalization data were obtained from the Royal College of Paediatrics and Child Health and represent pediatric hospitalizations in England. For the USA, weekly pediatric hospitalization data between July 31, 2020 and October 9, 2020 were obtained from the Department of Health and Human Services. The Y-axis scales for country-level data are independent in order to compare country-level trends to 4CE trends.

Bottom row of each plot: number of 4CE hospitals contributing pediatric hospitalization data per day in each country.


### How to use

Hover over the lines to view more details. Use the dropdown to select a country.

### Note

In some cases, the data reported by sites contained outliers or possibly incorrect units. These values were not removed from the visualizations to maintain the integrity of the data.
---
type: plot
title: Labs by Country and Site
subtitle: Lab values corresponding to fourteen LOINC codes
category: Labs
binder: true
tag: v1.0
order: 50
plots:
    Key Labs Overview:
        notebook: 03_lab_results_altair.ipynb
        items:
            - vega/plot_labs_five-lab-values-by-site.json
    By Country:
        notebook: 03_lab_results_altair.ipynb
        items:
            - vega/plot_labs_lab-values-by-country.json
    By Site:
        notebook: 03_lab_results_altair.ipynb
        items:
            - vega/plot_labs_lab-values-by-site.json
    Variation:
        notebook: 04_lab_variation_altair.ipynb
        items:
            - vega/plot_labs_lab-variation-across-sites-on-day-0.json
    Drop Ratio By Country:
        notebook: 05_lab_drop_plots_altair.ipynb
        items:
            - vega/plot_labs_percentage-of-measured-relative-to-baseline-by-country.json
    Drop Ratio By Site:
        notebook: 05_lab_drop_plots_altair.ipynb
        items:
            - vega/plot_labs_percentage-of-measured-relative-to-baseline-by-site.json
---

The plots on this page display values corresponding to LOINC codes, stratified by country or by site.

### How to use

- LOINC codes can be selected using the drop down menu below each plot.

- Multiple countries or sites can be selected by clicking on the color legends with the shift button.

- Zooming and panning is allowed using mouse wheel and dragging. Double-clicking on a white space resets the x- and y-axes to the original settings.

- To download the figure click the button with the ellipsis in the top right corner and choose either "Save as SVG" or "Save as PNG". The figure will be saved reflecting the current state.

### Note

In some cases, the data reported by sites contained outliers or possibly incorrect units. These values were not removed from the visualizations to maintain the integrity of the data.
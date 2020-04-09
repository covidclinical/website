
module Jekyll::PlotURLFilter
    include Jekyll::Filters::URLFilters

    def plot_url(input, page_url)
      relative_page_dir = File.dirname(relative_url(page_url))
      "#{relative_page_dir}/vega/#{input}.json"
    end

    def to_release_dir(input)
      File.basename(File.dirname(relative_url(input)))
    end
end

Liquid::Template.register_filter(Jekyll::PlotURLFilter)

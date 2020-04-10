
module Jekyll::C19Filters
    include Jekyll::Filters::URLFilters

    def to_plot_id(plot_path)
      plot_id = plot_path.sub("/", "_").sub(".", "_")
      plot_id
    end

    def to_plot_url(input, page_url)
      relative_page_dir = File.dirname(relative_url(page_url))
      "#{relative_page_dir}/#{input}"
    end

    def to_plot_type(input)
      plot_type = File.dirname(input)
      plot_type
    end

    def to_plots_type(input)
      case input
      when Hash
         return "hash"
      when Array
         return "array"
      end
    end

end

Liquid::Template.register_filter(Jekyll::C19Filters)

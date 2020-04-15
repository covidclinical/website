# custom jekyll filter functions

module Jekyll::C19Filters
    include Jekyll::Filters::URLFilters

    def to_plots_type(input)
      case input
      when Hash
         return "hash"
      when Array
         return "array"
      end
    end

    def to_plot_publication(publications, plot_relative_path)
      path_items = plot_relative_path.split(File::SEPARATOR)
      publications.select do |publication|
        if path_items[1] == publication.slug
          return publication
        end
      end
    end

    def to_publication_plots(site_plots, key)
      result = site_plots.select do |plot|
        path_items = plot.relative_path.split(File::SEPARATOR)
        path_items[1] == key
      end
      result
    end

    def to_release_plots(publication_plots, key)
      result = publication_plots.select do |plot|
        path_items = plot.relative_path.split(File::SEPARATOR)
        path_items[2] == key
      end
      result
    end

end

Liquid::Template.register_filter(Jekyll::C19Filters)

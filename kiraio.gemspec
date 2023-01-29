Gem::Specification.new do |spec|
    spec.name = "kiraio"
    spec.version = "0.0.1"
    spec.authors = "Bayu Satiyo (kiraio)"
    spec.email = "itsyuukunz@gmail.com"

    spec.summary  = "No description."
    spec.homepage = "https://kiraio.my.if"
    spec.license  = "MIT"

    spec.files = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r!^(assets|_(includes|layouts)/|(CODE_OF_CONDUCT|LICENSE|README)((\.(txt|md|markdown)|$)))!i)
    end

    spec.add_runtime_dependency "jekyll"
    spec.add_runtime_dependency "jekyll-feed"
    spec.add_runtime_dependency "jekyll-gist"
    spec.add_runtime_dependency "jekyll-last-modified-at"
    spec.add_runtime_dependency "jekyll-paginate-v2"
    spec.add_runtime_dependency "jekyll-redirect-from"
    spec.add_runtime_dependency "jekyll-seo-tag"
    spec.add_runtime_dependency "jekyll-sitemap"

    spec.add_development_dependency "bundler"
    spec.add_development_dependency "jekyll"
    spec.add_development_dependency "jekyll-gist"
    spec.add_development_dependency "jekyll-last-modified-at"
    spec.add_development_dependency "jekyll-paginate-v2"
    spec.add_development_dependency "jekyll-redirect-from"
    spec.add_development_dependency "jekyll-sass-converter"
    spec.add_development_dependency "jekyll-seo-tag"
    spec.add_development_dependency "tzinfo"
    spec.add_development_dependency "tzinfo-data"
    spec.add_development_dependency "wdm"
    spec.add_development_dependency "http_parser.rb"
  end

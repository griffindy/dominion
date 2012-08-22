guard :coffeescript, :output => 'javascripts' do
  watch(%r{^src/(.*)\.coffee})
end

guard :coffeescript, :output => 'spec/javascripts' do
  # watch(%r{^spec/src/.*/(.*)\.coffee})
  watch(%r{^spec/src/(.*)\.coffee})
end

guard 'livereload' do
  watch(%r{^spec/javascripts/.*/(.*)\.js})
  watch(%r{^spec/javascripts/(.*)\.js})
  watch(%r{^javascripts/.*/(.*)\.js})
  watch(%r{^javascripts/(.*)\.js})
end

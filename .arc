@app
enhance-blog-template

@static
prune true

@plugins
enhance/arc-plugin-enhance
enhance/arc-plugin-posse
create-post-metadata
create-rss-feed

@posse
feed "https://bookrecs.org/rss"
rate "5 minutes"
since "2023-04-19"

@enhance-styles
config styleguide.json

@begin
appID 6K8HBLST

@aws
runtime nodejs18.x

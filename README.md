# Feedify

<img src="/docs/feedify.png" width="350">

Feedify is a mobile news reader app built with React Native for a coding challenge.
The app uses the [News API](https://newsapi.org/) to gather news sources and articles
from those sources.

## Structure

* `App` - Responsible for rendering the Router and providing access to the store
throughout the application.
* `Router` - Provides access to the two scenes in the application (Channel Index and Article Index) and
allows the user to navigate back and forth throughout the scenes.
* `Index` - Reusable component responsible for rendering either the
Channel Index or the Article Index depending on what props are passed in.
* `ChannelItem` - Renders the news source's name and a brief description.
* `ArticleItem` - Render's an article's title, description, and thumbnail image.

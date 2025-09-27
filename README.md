# Bookmark Link Highlighter

## Description
Bookmark Link Highlighter is a Firefox extension that highlights links in a webpage that are saved as Bookmarks; changing link text, outline and background styles. It is capable to change links using Regex to add flexibility on legacy URLs and other consistencies.

## Download Links
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/bookmark-link-highlighter/)

## Examples
There are 2 types of links, internal and external.
- The internal link references the actual host name like in a Youtube profile `https://www.youtube.com/@USER_NAME` will have a video with an href=`/watch?v=7eA-_dJ7wX8`.
- The external link references the external webpage in it's entirety like in the the previous Youtube profile linking it's twitter account with a href=`https://www.twitter.com/USER_NAME`.

### Changing external Twitter links to X in Youtube to highlight them
To change external links in a host name the host is included and given dummy rules. If the dummy host is not added the links won't change.
- Host Names = `youtube.com, twitter.com`
- Patterns to Replace = `//gi, /twitter.com/gi`
- Replacements = `, x.com`
- Test Links = (Inside Youtube host) -> `https://twitter.com/user`
- Replaced Links = (Inside Youtube host) -> `https://x.com/user`

### Changing external Twitter links to X when Youtube also has rules to highlight them
To change external links in a host name that also has rules no dummy is necessary, the links are changed because the current host name it's already added.
- Host Names = `youtube.com, twitter.com`
- Patterns to Replace = `/(\/watch\?v=)(.*)&list=(.*)$/gi, /twitter.com/gi`
- Replacements = `$1$2, x.com`
- Test Links = (Inside Youtube host) -> `https://twitter.com/user, /watch?v=VIDEO_ID&list=LIST_ID&index=2`
- Replaced Links = (Inside Youtube host) -> `https://x.com/user, /watch?v=VIDEO_ID`

## Sources
Icon made with Inkscape, big thanks to their software.
import Feed from 'rss-to-json'

export function getStories(callback) {
  Feed.load('https://medium.com/feed/@plattyp', function(err, rss){
    if (err) {
      return callback(err)
    }

    const stories = transformStories(rss)
    return callback(stories)
  })
}

function transformStories(rssResponse) {
  return rssResponse.items.map((item) => {
    const imageRegex = /(https:\/\/[^"]*?\.png)/g
    const images = getMatches(item.content_encoded, imageRegex)
    return {
      title: item.title,
      description: item.description,
      link: item.link,
      category: item.category,
      created_at: item.atom_updated,
      images
    }
  })
}

const getMatches = (input, regex) => {
  var matches, output = [];
  while (matches = regex.exec(input)) {
    output.push(matches[1]);
  }
  return output
};
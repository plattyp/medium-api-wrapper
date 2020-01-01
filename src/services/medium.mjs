import Feed from 'rss-to-json'

export function getStories(userName) {
  const promise = new Promise((resolve, reject) => {
    try {
      Feed.load('https://medium.com/feed/@' + userName, function(err, rss){
        if (err) {
          return reject(err)
        }
    
        const stories = transformStories(rss)
        return resolve(stories)
      })
    }
    catch(e) {
      return reject(e)
    }
  });
  return promise
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
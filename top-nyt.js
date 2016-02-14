var request = require('sync-request')
var api_key = '83a1f6fca9d35d99fe1d0d8b113a44ce:10:65643897'

// top n headlines in any section
function top_headlines (section, n) {

  function uri (section) {
    return `http://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`
  }

  var r = request('GET', uri(section))

  var stories = JSON.parse(r.body).results

  // top 5 headlines
  return stories.slice(0,n).map(r => r.title)
}

console.log(top_headlines('home', 2).join('\n'))
console.log(top_headlines('world', 2).join('\n'))

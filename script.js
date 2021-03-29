const quoteToId = quote => `${quote.series.toLowerCase()}-${quote.episode}-${quote.start}`

function filterQuotes(filter) {
  const quotes = window.quotes.filter(quote =>
    quote.sentence.toLowerCase().includes(filter.toLowerCase())
    || quote.series.toLowerCase().includes(filter.toLowerCase())
    || quote.title.toLowerCase().includes(filter.toLowerCase())
    || quote.episode === parseInt(filter)
    || quote.speaker.toLowerCase().includes(filter.toLowerCase())
    || quote.character.toLowerCase().includes(filter.toLowerCase())
  )

  Array.from(document.getElementsByClassName('quote')).forEach(node => node.style.display = 'none')

  quotes
    .map(quoteToId)
    .forEach(id => {
      document.getElementById(id).style.display = 'block'
    })
}

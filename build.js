const fs = require('fs')
const data = require('./sounds')

const style = fs.readFileSync('./style.css', 'utf-8')
const head = `<html lang="fr"><head><meta charset="utf-8"><title>Crossed/Chroma soundboard</title><style>${style}</style></head><body><ul class="board">`
const tail = `</ul></body></html>`


const body = data.map(quote =>
  [
    '<li class="quote" onclick="this.children[0].play()">',
    `<audio src="/${quote.series.toLowerCase()}/${quote.episode}/${quote.start}.mp3"></audio>`,
    '<div class="details">',
    `<span class="sentence">${quote.sentence}</span>`,
    '<ul>',
    `<li><a href="${quote.url}" target="_blank">${quote.series} - ${quote.episode} - ${quote.title}</a></li>`,
    `<li>${quote.speaker} - ${quote.character}</li>`,
    '</ul>',
    '</div>',
    '</li>',
  ].join('')
).join('')


fs.writeFile('public/index.html', head + body + tail, (error) => {
  if (error) {
    console.error('Error while writing the index file')
    console.error(error)
  } else {
    console.log('Soundboard page built')
  }
})

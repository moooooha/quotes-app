var arrayOfQuotes = [{
    'author': 'Marcus Tullius Cicero',
    'quote': 'A room without books is like a body without a soul.'
},{
    'author': 'Frank Zappa', 
    'quote': 'So many books, so little time.'
},{
    'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
}, {
    'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
},{
    'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
},{
    'author': 'Mahatma Gandhi', 
    'quote': 'Be the change that you wish to see in the world.'
},]

function generateQuote (){
    var floor = (Math.floor(Math.random()*arrayOfQuotes.length));
    document.querySelector(`#quoteOutPut`).textContent = `\"${arrayOfQuotes[floor].quote}\"`;
    document.querySelector('#authorOutPut').textContent = `--${arrayOfQuotes[floor].author}`;
}

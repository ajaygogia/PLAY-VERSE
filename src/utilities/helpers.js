let names = ['Ajay', 'Nikhil', 'Jiya', 'Ritik', 'Samarth', 'Mehul', 'Riya', 'Mehak', 'Pranshu', 'Babita', 'Jetha']
export function getRandomNames() {
    const index = Math.floor(Math.random() * 10)
    return names[index]
}

let messages = [
'I am studying React Today',
'Today weather is amazing',
'This video is my fav of all time',
'Hi all, have a good day',
"Watching my favorite TV series tonight",
"Enjoying a relaxing evening with family",
"Had a delicious meal at my favorite restaurant",
"Reading a fantastic book on JavaScript",
'Ajay Gogia is a great developer man'
]

export function getRandomMessages() {
    const index = Math.floor(Math.random() * 10)
    return messages[index]
}
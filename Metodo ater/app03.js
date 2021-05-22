const users = [
    { name: 'Raphael Rychard', premium: true},
    { name: 'Ana Vytoria', premium: false},
    { name: 'Bruno Caio', premium:true},
    { name: 'Linus Torvalds', premium: false},
    { name: 'Ada Lovelace', premium: true},
]

const primiumUser = users.filter(user => user.premium)

console.log(primiumUser)
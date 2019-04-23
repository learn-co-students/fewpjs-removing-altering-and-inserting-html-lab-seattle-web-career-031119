main = document.getElementById('main')
main.remove()

const newHeader = document.createElement('h1')

document.body.appendChild(newHeader)

newHeader.id = 'victory'

newHeader.textContent = "MERA is the champion"

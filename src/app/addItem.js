var object = {}

object.addItem = (val) => {
    document.getElementById('output').innerHTML = 
    `<li>${val}<i>`
}

module.exports = object;
document.getElementById('love-you').style.display = 'none'
document.getElementById('best-friend').style.display = 'none'

const yes = () => {
    document.getElementById('love-you').style.display = 'block'
    document.getElementById('best-friend').style.display = 'none'
}

const no = () => {
    document.getElementById('best-friend').style.display = 'block'
    document.getElementById('love-you').style.display = 'none'
}
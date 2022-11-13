function menu(valor) {
    if (valor === 1) {
        var container = document.getElementById('local-menu')
        container.style.right = 0
    } else if (valor === -1) {
        var container = document.getElementById('local-menu')
        container.style.right = '-100%'
    }
}

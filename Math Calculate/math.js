function convert(money) {

    let usermoney = parseFloat(prompt('Enter a Money in Peso'))

    switch(money) {
        case 'dolar':
            usermoney *= 0.017
            alert(usermoney)
            break
        case 'euro':
            usermoney *= 0.017
            alert(usermoney)
            break
    }
}
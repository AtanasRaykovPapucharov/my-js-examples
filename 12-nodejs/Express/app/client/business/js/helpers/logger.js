// Logger
function logger(msg) {
    const justNumb = 5
    const element = $('#logger')
    element.css({
        'position': 'absolute',
        'top': '0px',
        'width': $(document).width(),
        'height': $(document).height() / justNumb,
        'background': 'rgb(216, 95, 95)',
        'color': '#fff',
        'font-size': '16px',
        'text-align': 'center',
        'z-index': '999',
        'padding-top': $(document).height() / (2 * justNumb)
    })

    element.html('<h2>' + msg + '</h2>')

    element.addClass('animated fadeInDown')

    setTimeout(() => {
        element.addClass('animated fadeOut')
    }, 4000)
}
// drop-down menu
$(() => {
	let isToggle = false
	let $navbar = $('ul.menu-bar')
	let $main = $('main')
	$('.menu-bar-btn').on('click', function () {
		$navbar.removeClass('fadeInLeft')
		$(this).toggleClass("open")
		if (!isToggle) {
			$navbar.addClass('fadeInLeft')
			$navbar.css('display', 'inherit')
			$main.css('opacity', '0.3')

		} else {
			$navbar.css('display', 'none')
			$main.css('opacity', '1')
		}

		isToggle = !isToggle
	})

	$('.menu-bar li a').on('click', function () {
		$('#overlay').hide()
		$('.lines-button').removeClass('close')
		isToggle = !isToggle
	})
})

// Animation bird
function onAssetsLoaded() {
	let href = document.location.href
	if ('nature' === href.substring(href.length - 8, href.length - 2)) {
		let frames = []
		for (let i = 0; i < 8; i++) {
			frames.push(PIXI.Texture.fromFrame('bird' + i + '.png'))
		}
		let anim = new PIXI.extras.AnimatedSprite(frames)
		anim.x = app.renderer.width
		anim.y = app.renderer.height / 2
		anim.width = 20
		anim.height = 20
		anim.anchor.set(0.5)
		anim.animationSpeed = 0.14
		anim.play()
		app.stage.addChild(anim)
		// horizontal moving
		let time = 0
		app.ticker.add(function () {
			let currentTime = new Date()
			anim.x = anim.x - 1
			if (anim.x === -30) {
				$('#bird').css('display', 'none')
				time = currentTime
			}
			if (time !== 0 && currentTime - time > 60000) {
				$('#bird').css('display', 'inherit')
				anim.x = app.renderer.width
				time = 0
			}
		})
	}
}
let app = new PIXI.Application($(document).width(), 30, {
	transparent: true
})
document.getElementById('bird').appendChild(app.view)
PIXI
	.loader
	.add('../assets/sprites/bird.json')
	.load(onAssetsLoaded)

// Admin
$('#auth-form-btn').on('click', () => {
	let pass = $('#pass-field').val()
	$('#pass-field').val('')
	let hash = CryptoJS.MD5(pass).toString(CryptoJS.enc.Base64)
	if (pass && hash === '1CdEbzSZ+2jACC26VuJxdA==') {
		$('button.add-new').css('display', 'inherit')
	} else {
		logger('Sorry, you are not authenticated!')
		setTimeout(() => {
			document.location.reload()
		}, 1000)
	}
})

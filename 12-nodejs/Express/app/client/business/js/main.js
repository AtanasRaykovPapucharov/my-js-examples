$(() => {
    let formObj = {
        section: '',
        subsection: '',
        title: '',
        subtitle: '',
        img: '',
        video: '',
        content: '',
        comments: [],
        tagField: '',
        tags: [],
        looks: 0,
        likes: 0,
        bookmarksCount: 0,
        commentsCount: 0,
        author: ''
    }
    let imageFile
    const SERVICE = {
        getBlogById: (params) => {
            data.getBlogById(params.id).then((blog) => {
                return view.singleObject('#content-block', blog);
            })
        },
        addNew: {
            sections: [
                "body-spirit",
                "medicine",
                "arts",
                "science",
                "nature",
                "society",
                "technologies",
                "extreme",
                "sport",
                "the-games"
            ],
            subsections: [{
                    section: "body-spirit-section",
                    isActive: true,
                    names: ["4owe6koto-tqlo", "joga", "hranene", "wipassana", "fitnes", "aerobika", "bojni-izkustwa", "masav", "rejki", "dao", "seks"]
                },
                {
                    section: "arts-section",
                    isActive: false,
                    names: ["muzika", "risuwane", "literatura", "kino", "grafiti", "teatyr", "anima3iq", "komiks", "fotografiq", "tan3i", "skulptura", "dyrworezba", "metal", "styklo"]
                },
                {
                    section: "science-section",
                    isActive: false,
                    names: ["matematika", "fizika", "himiq", "biology", "psihologiq", "geografiq", "geologiq", "ikonomika", "filosofiq", "istoriq", "arheologiq", "kulturologiq", "lingwistika", "psewdo-nauki"]
                },
                {
                    section: "medicine-section",
                    isActive: false,
                    names: ["hospital", "ayurveda", "herbs", "acupuncture", "shiatsu", "chiropractic", "gerson-therapy", "homeopathy", "eft", "reflexotherapy", "aromatherapy", "mms"]
                },
                {
                    section: "technologies-section",
                    isActive: false,
                    names: ["slyn4ewi", "wqtyrni", "wodni", "qdreni", "elektronika", "medi3inski", "robotika", "komp9tyrni", "awtomobili", "mostowe", "podwodni3i", "samoleti", "kosm4eski"]
                },
                {
                    section: "nature-section",
                    isActive: false,
                    names: ["viwotni", "dyrweta", "rasteniq", "gybi", "wodopadi", "ezera", "rekis", "moreta", "pe8eri", "skali", "planini", "snegowe", "dyvdowe", "tornado", "grymotewi3i", "dyga", "mygla", "obla3i", "pustini", "ostrowi", "3unami", "wulkani"]
                },
                {
                    section: "society-section",
                    isActive: false,
                    names: ["ob7uwane", "pari", "flirtuwane", "semejstwo", "zakoni", "banki", "poli3iq", "stroitelstwo", "remonti", "oryviq", "wojna", "bedstwiq"]
                },
                {
                    section: "extreme-section",
                    isActive: false,
                    names: ["katerene", "gmurkane", "para6utizym", "byndvi", "koloezdene", "ski", "snowboarding", "skateboarding", "hunting", "alpinizym", "caving"]
                },
                {
                    section: "the-games-section",
                    isActive: false,
                    names: ["nastolni", "wideo", "komp9tyrni", "sportni", "mobilni", "hazartni"]
                }
            ]
        },
        newView: () => {
            $('button.add-new').html('BACK')
        },
        blogObject: () => {
            $('#add-form').serializeArray().forEach((el) => {
                formObj[el.name] = el.value
            })
            let allTags = $('#all-tags').val()
            formObj.tagField = allTags
            formObj.tags = allTags.split(/[\s,;]+/)
            formObj.tags.forEach((tag) => {
                tag = tag.toLowerCase()
            })
            formObj.subsection = $('#add-form .form-item select.opened').val()
            formObj.date = new Date().toUTCString()
            formObj.author = localStorage.getItem('current-user-app')
            return formObj
        },
        logInPlease: () => {
            $('body .notifier').fadeIn()
            setTimeout(() => {
                $('body .notifier').fadeOut()
            }, 3000)
            appRouter.navigate('/')
        }
    }

    const usernameLogged = localStorage.getItem('absend-user-logged')
    const appRouter = new Navigo(null, true)
    appRouter
        .on({
            '/:subsection': (data) => {
                let alpha = {
                    "-": " ",
                    "a": "а",
                    "b": "б",
                    "w": "в",
                    "g": "г",
                    "d": "д",
                    "e": "е",
                    "v": "ж",
                    "z": "з",
                    "i": "и",
                    "j": "й",
                    "k": "к",
                    "l": "л",
                    "m": "м",
                    "n": "н",
                    "o": "о",
                    "p": "п",
                    "r": "р",
                    "s": "с",
                    "t": "т",
                    "u": "у",
                    "f": "ф",
                    "h": "х",
                    "3": "ц",
                    "4": "ч",
                    "6": "ш",
                    "8": "щ",
                    "y": "ъ",
                    "x": "ь",
                    "9": "ю",
                    "q": "я",
                }
                let bgSubsection = ''
                let subsection = data.subsection
                $('#substate-tag').attr('href', `#/${subsection}`)
                if (subsection === 'chess') {
                    return view.chess('#content-block', {})
                }
                for (let i = 0; i < subsection.length; i += 1) {
                    bgSubsection += alpha[subsection[i]]
                }
                if (bgSubsection === 'тес' || bgSubsection === 'мма') {
                    bgSubsection = bgSubsection.toUpperCase()
                } else {
                    bgSubsection = bgSubsection[0].toUpperCase() + bgSubsection.slice(1)
                }
                $('#substate-tag').html(bgSubsection)
                requester.get(`/api/blog/${subsection}`)
                    .then((resp) => {
                        resp.data.forEach((d) => {
                            if (d.title.length > 14) {
                                let titleShort = d.title.substring(0, 15) + ' ...'
                                d.title = titleShort
                            }
                        })
                        return view.antre('#content-block', {
                            data: resp.data
                        })
                    })
            },
            '/:subsection/:id': (data) => {
                let id = data.id
                requester.get(`/api/single-blog/${id}`)
                    .then((resp) => {
                        let dataObj = resp.data
                        dataObj.video = 'https://www.youtube.com/embed/' + dataObj.video
                        view.blog('#content-block', dataObj)
                            .then(() => {
                                $('#blog-content').html(dataObj.content)
                                // tags
                                $('#view-post-container button.tag-btn span').on('click', function () {
                                    let tag = $(this).html()
                                    requester.post(`/api/tags/${tag}`)
                                        .then(() => {})
                                })
                            })
                    })
            },
            '/add/blog/view': () => {
                return view.blog('#content-block')
            },
            '/add/blog/add-new-view': () => {
                SERVICE.newView()
                view.blog('#content-block', SERVICE.blogObject())
                    .then((a) => {
                        viewImage(imageFile, document.getElementById('blog-img'))
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            '/add/blog/save': () => {
                let optionsObj = {
                    data: SERVICE.blogObject()
                }
                return ajaxRequesterAxios.get(document.location.origin + '/api/static', {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((resp) => {
                        const CLOUDINARY_URL = resp.data.cloudinaryUrl
                        const CLOUDINARY_UPLOAD_PRESET = resp.data.cloudinaryUploadPreset

                        let formData = new FormData()
                        formData.append('file', imageFile)
                        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

                        let options = {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'X-Requested-With': 'XMLHttpRequest'
                            },
                            data: formData
                        }
                        view.loader('#content-block')
                        ajaxRequesterAxios.post(CLOUDINARY_URL, options)
                            .then((resp) => {
                                optionsObj.data['img'] = resp.data.url
                                console.log('Image added!');
                                logger('Image saved!')
                                return resp
                            })
                            .then((resp) => {
                                console.log('POST ...')
                                ajaxRequesterAxios.post(document.location.origin + '/api/new-post', {
                                        data: JSON.stringify(optionsObj.data)
                                    }).then((resp) => {
                                        if (resp) {
                                            console.log(resp)
                                            logger('Publication applied!')
                                        }
                                    })
                                    .catch((err) => {
                                        logger(err)
                                    })
                                appRouter.navigate('/')
                                location.reload()
                            })
                            .catch((error) => {
                                console.error()
                                logger('error')
                            })
                    })
            },
            '*': () => {
                appRouter.navigate('/')
            }
        })
        .notFound(() => {
            alert('Error! Router not found!')
        })
        .resolve()

    $('button.add-new').on('click', function () {
        return view.addNew('#content-block', {
            static: SERVICE.addNew,
            data: formObj
        }).then(() => {
            let optionValInit = $('#add-form .form-item #main-select').val()
            $('#add-form .form-item #main-select').on('change', () => {
                let optionVal = optionValInit
                optionValInit = $('#add-form .form-item #main-select').val()
                $(`#add-form .form-item #${optionVal}-section`).removeClass('opened')
                $(`#add-form .form-item #${optionVal}-section`).addClass('closed')
                $(`#add-form .form-item #${optionValInit}-section`).addClass('opened')
                $(`#add-form .form-item #${optionValInit}-section`).removeClass('closed')
            })

            $('form#add-form .form-item input.upload-image').on('change', function () {
                let imagePreview = document.getElementById('upload-img')
                imageFile = document.querySelector('input[type=file]').files[0]
                viewImage(imageFile, imagePreview)
            })
        })
    })

    function viewImage(imageFile, imagePreview) {
        let reader = new FileReader()
        reader.onloadend = function () {
            imagePreview.src = reader.result
            formObj.img = reader.result
        }
        if (imageFile) {
            reader.readAsDataURL(imageFile)
        } else {
            imagePreview.src = ""
        }
    }

    function compileHtml(html) {
        return new Promise((resolve, reject) => {
            let compiledTemplate = Handlebars.compile(html)
            resolve(compiledTemplate)
        })
    }
})
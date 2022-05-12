const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log(document.URL)

// header focus on inputelement and click information
const headerInputElement = $('.header__search-wrap input')
const rootElement = $('.app__wrap')
const bellBtn = $('.header__information-notify')
const boxNotify = $('.header__information-notify-box');
const inforImg = $('.header__information-img');
const boxUser = $('.header__information-user-box')


bellBtn.onclick = function() {
    boxNotify.classList.toggle('isopen')
}

bellBtn.addEventListener('click',function(e) {
    e.stopPropagation()
})

boxNotify.addEventListener('click', function(e) {
    e.stopPropagation()
})

headerInputElement.onfocus = function () {
    $('.header__search-wrap').style.border = '1px solid var(--primary-color)';
    
}
rootElement.onclick = function () {
    $('.header__search-wrap').style.border = '1px solid rgba(0, 0, 0, 0.1)'
    // Close boxNotify when click app
    boxNotify.classList.remove('isopen')
    // Close userBox when click app
    boxUser.classList.remove('isopen')
    // Close addBox
    addIcon.classList.remove('isrotate');
    boxAdd.classList.remove('isopen')
}

headerInputElement.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Click infor
inforImg.onclick = function() {
    boxUser.classList.toggle('isopen')
}

inforImg.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxUser.addEventListener('click', function(e) {
    e.stopPropagation()
})


// Add js

const addBtn = $('.page__sidebar-add-item-link')
const addIcon = $('.page__sidebar-add-item-icon')
const boxAdd = $('.page__sidebar-add-box')

addBtn.onclick = function() {
    addIcon.classList.toggle('isrotate');
    boxAdd.classList.toggle('isopen')
}

addBtn.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxAdd.addEventListener('click', function(e) {
    e.stopPropagation()
})



// App
const blogsList = document.querySelector('.page__blog-content-main')

const blogApp = {
    blogs: [
        {
            name: 'FirstOne',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Thay mặt đội ngũ Admin cảm ơn các bạn đã tham gia khóa học',
            content: '.....',
            link: '',
            img: 'https://pantado.edu.vn/storage/media/thanks_1636595533.png',
            date: 3,
            time: 5,
        },
        
        
    ],

    render: function() {
        const blogHtmls = this.blogs.map(function(data) {
            return `
            <div class="page__blog-content-main-item">
                <div class="page__blog-content-main-item-header">
                    <div class="page__blog-content-main-item-header-left">
                        <img src="${data.userImg}" alt="" class="page__blog-content-main-item-header-user">
                        <strong">${data.name}</strong>
                    </div>

                    <div class="page__blog-content-main-item-header-right">
                        <i class="far fa-bookmark"></i>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>

                <div class="page__blog-content-main-item-content">
                    <div class="page__blog-content-main-item-content-heading">
                        <h3 class="link-blog">${data.heading}</h3>
                        <span>${data.content}</span>
                    </div>
                    <div class="page__blog-content-main-item-img">
                        <img src="${data.img}" alt="">
                    </div>
                </div>


                <div class="page__blog-content-main-item-footer">
                    <span>${data.date} ngày trước</span>
                    <span>${data.time} phút đọc</span>
                </div>
            </div>
            `
        })

        blogsList.innerHTML = blogHtmls.join('')
    },

    start: function() {
        this.render()
    }
}

blogApp.start()


var testLink = document.getElementsByTagName('a')

const testWarn = document.querySelector('.test-warn')
// testLink = [testLink]
console.log(testLink.length)
for(let i = 0; i < testLink.length; i++) {
    const testLinks = testLink[i]
    if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
        testLinks.setAttribute("href", "#")
        testLinks.addEventListener('click', function(e) {
            e.preventDefault()
        })
    }

    testLinks.onclick = function() {
        if(testLinks.getAttribute('href') === '#') {
            // testWarn.style.display = 'block'
            // setTimeout(function() {
            // testWarn.style.display = 'none'

            // },3000)
            alert()
        }
    }
}





const menuRespon = document.querySelector('.header__icon-menu')
const sidebarRespon = document.querySelector('.side__bar-respon')
const sidebarLeft = document.querySelector('.side__bar-respon-left')
const exitSibar = document.querySelector('.side__bar-respon-right')

menuRespon.onclick = function() {
    sidebarRespon.classList.add('iscover-fill');
    sidebarLeft.classList.add('isopen-sidebar-respon')
}

exitSibar.onclick = function() {
    sidebarRespon.classList.remove('iscover-fill');
    sidebarLeft.classList.remove('isopen-sidebar-respon')
}
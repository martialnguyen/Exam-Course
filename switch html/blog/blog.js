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
            name: 'Sưu tầm',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Thời gian và động lực',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/thoi-gian-va-dong-luc.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/1671/61b6368a3a089.jpg',
            date: 3,
            time: 5,
        },
        {
            name: 'Sưu tầm',
            heading: 'Lập trình hướng đối tượng oop',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/lap-trinh-huong-doi-tuong-oop.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/1021/6173be68944ad.jpg',
            date: 4,
            time: 9,
        },
        {
            name: 'Sưu tầm',
            heading: 'Bạn là sinh viên thì bolg này là dành cho bạn P2',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/ban-la-sinh-vien-bai-blog-nay-la-danh-cho-ban-p2.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/621/6150aa8cb42b3.jpg',
            date: 7,
            time: 2,
        },
        {
            name: 'Sưu tầm',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'GenZ theo ngành IT và suy nghĩ hơi hơi sai lệch 😗',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/genz-theo-nganh-it-va-suy-nghi-hoi-hoi-sai-lech.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/707/6155ed6c19af9.png',
            date: 12,
            time: 3,
        },
        {
            name: 'Sưu tầm',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Bạn là sinh viên thì bolg này là dành cho bạn P1',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/ban-la-sinh-vien-bai-blog-nay-la-danh-cho-ban-p1.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/621/6150aa8cb42b3.jpg',
            date: 15,
            time: 4,
        },
        {
            name: 'Sưu tầm',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Tâm sự - chia sẻ - kinh nghiệm tự học - Tuổi 22.',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/tam-su-chia-se-kinh-nghiem-tu-hoc-tuoi-22.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/261/613f00e0a3f74.png',
            date: 16,
            time: 4,
        },
        {
            name: 'Sưu tầm',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Chia sẻ các trang web icon, hình ảnh chất lượng cao miễn phí',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/chia-se-cac-trang-web-icon-hinh-anh-chat-luong-cao-mien-phi.html',
            img: 'https://f40-zpg.zdn.vn/6414417963368895323/8af558e3d88910d74998.jpg',
            date: 16,
            time: 12,
        },
        {
            name: 'Sưu tầm',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Bốn nguyên tắc khi học code',
            content: '.....',
            link: 'https://fullstack.edu.vn/blog/bon-nguyen-tac-khi-hoc-code.html',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/1385/6197a09e60b56.png',
            date: 17,
            time: 7,
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
                        <a href="${data.link}" class="link-blog">${data.heading}</a>
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
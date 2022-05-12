const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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



// app

const questionsList = document.querySelector('.page__question-content-main')

const questionApp = {
    questions: [
        {
            title: 'Ai thấy giao diện mới của web anh Sơn hiện đại tối giản dơ tay nào?! 😁',
            userImg: 'https://avatar-redirect.appspot.com/google/114408222476873472712?size=400',
            name: 'Phuong Quang Tran',
            content: 'Ai thấy giao diện mới của web anh Sơn vừa hiện đại vừa tối giản dơ tay...',
            user1: 'https://graph.facebook.com/502686104496550/picture?width=400&height=400',
            user2: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/114069/61735deae47bc.jpg',
            user3: 'https://avatar-redirect.appspot.com/google/100590014939133298757?size=400',
            comment: 127
        },
        {
            title: 'em mới bắt đầu khóa học thì không biết viết code ở phần mềm gì v ạ. a giúp e vs ạ',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            name: '',
            content: 'mọi người giúp em phần mềm viết code là gì...',
            user1: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/28536/61773df585d85.gif',
            user2: 'https://avatar-redirect.appspot.com/google/114872706407217018723?size=400',
            user3: 'https://avatar-redirect.appspot.com/google/114872706407217018723?size=400',
            comment: 12
        },
        {
            title: 'THỜI GIAN TỰ HỌC VÀ HỌC NGOÀI NHƯ THẾ NÀO?',
            userImg: 'https://graph.facebook.com/1804657899734569/picture?width=400&height=400',
            name: 'Tran Luan',
            content: 'THỜI GIAN TỰ HỌC VÀ HỌC NGOÀI NHƯ THẾ NÀO?',
            user1: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/28536/61773df585d85.gif',
            user2: 'https://avatar-redirect.appspot.com/google/114872706407217018723?size=400',
            user3: 'https://avatar-redirect.appspot.com/google/114872706407217018723?size=400',
            comment: 9
            
        },
        {
            title: 'CSS Animation',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_photos/100420/614b5a452ec3d.jpg',
            name: 'Khánh Dương Nguyễn Đức',
            content: 'Mọi người cho em hỏi là làm thế nào để chữ Ánh\'s Food kia của em có animation fly in giống ở bên powerpoint...',
            user1: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/28536/61773df585d85.gif',
            user2: 'https://avatar-redirect.appspot.com/google/114872706407217018723?size=400',
            user3: 'https://avatar-redirect.appspot.com/google/114872706407217018723?size=400',
            comment: 5
        },
        {
            title: 'Vấn đề việc làm',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_photos/104212/6154fb495267a.jpg',
            name: 'Phaolo Đại',
            content: 'em chào mội người em tên Đại năm nay em 17t em nghĩ học khi em vừa học hết lớp 8 và em đã đi làm ngoài xã hội từ năm em 14t không biết nếu em theo nghề này...',
            user1: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user2: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user3: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            comment: 4
        },
        {
            title: 'hỏi về giao diện web',
            userImg: 'https://avatar-redirect.appspot.com/google/105708715739407813171?size=400',
            name: 'Trần Mạnh Tiến',
            content: 'các bác cho e hỏi xíu ạ, làm thế nào để e có trình edit text như f8 ạ, bác nào biết chỉ em với ạ, hoặc cho e xin keyword e tìm hiểu, em...',
            user1: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user2: 'https://avatar-redirect.appspot.com/google/103380879646448007380?size=400',
            user3: 'https://avatar-redirect.appspot.com/google/105708715739407813171?size=400',
            comment: 3
        },
        {
            title: 'Hỏi về extension',
            userImg: 'https://graph.facebook.com/470104780827697/picture?width=400&height=400',
            name: 'Nguyễn Thuận',
            content: 'Mọi người cho em hỏi là có extension trên VS gợi ý code, mình chỉ cần gõ 1 cái là tự động ra luôn mấy dòng lệnh code như ý mình muốn. Anh Sơn có nói ở...',
            user1: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user2: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user3: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            comment: 3
        },
        {
            title: 'Làm thế nào để tạo một web (app) tracking delivery?',
            userImg: 'https://avatar-redirect.appspot.com/google/101478883022621173060?size=400',
            name: 'Thân Sơn',
            content: 'Chào mọi người !  Hiện tại mình đang có nhu cầu làm một trang web (hoặc app) có thể check đơn hàng đã giao đi tới đâu giống như check đơn hàng trong...',
            user1: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user2: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            user3: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            comment: 2
        }
    ],

    render: function() {
        const commentHtmls = this.questions.map(function(data) {
            return `
            <div class="page__question-content-main-item">
            <div class="page__question-content-main-header">
                <span class="page__question-content-main-header-topics">Front-end/ Mobile Apps</span>
                <div class="page__question-content-main-header-icon">
                    <i class="far fa-bookmark"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>

            <div class="page__question-content-main-heading">
                <span>${data.title}</span>
            </div>

            <div class="page__question-content-main-profile">
                <div class="page__question-content-main-profile-left">
                    <img src="${data.userImg}" alt="" class="page__question-content-main-profile-left-img">
                    <span class="page__question-content-main-profile-left-name">Đăng bởi <strong>${data.name}</strong></span>
                    <span class="page__question-content-main-profile-left-date">2 tháng trước</span>
                </div>

                <div class="page__question-content-main-profile-right">
                    <img src="${data.user1}" alt="" class="page__question-content-main-profile-right-img user1">
                    <img src="${data.user2}" alt="" class="page__question-content-main-profile-right-img user2">
                    <img src="${data.user3}" alt="" class="page__question-content-main-profile-right-img user3">
                    <span>${data.comment} trả lời</span>
                </div>
            </div>

            <span class="page__question-content-main-text">${data.content}</span>
            
            <div class="page__question-content-main-hastag">
                <div class="page__question-content-main-hastag-wrap">
                    <span>chat</span>
                    <span>qna</span>
                    <span>sharing</span>
                </div>

                <button>Chi tiết</button>
            </div>
        </div>
            `
        })

        questionsList.innerHTML = commentHtmls.join('')
    },
    
    start: function() {
        this.render()
    }
}

questionApp.start()



// const pageContent = document.querySelector('.page__content')
// // var testLink = pageContent.getElementsByTagName('a')

// const noticeWarn = document.querySelector('#notice')
// for(let i = 0; i < testLink.length; i++) {
//     const testLinks = testLink[i]
//     if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
//         testLinks.setAttribute("href", "#")
//         testLinks.addEventListener('click', function(e) {
//             e.preventDefault()
//         })
//     }

//     testLinks.onclick = function() {
//         if(testLinks.getAttribute('href') === '#') {
//             const warning = document.createElement('div')
//             warning.classList.add('notice__warn');
//             warning.innerHTML = `
//                 <div class="notice__warn-icon">
//                     <i class="fas fa-exclamation-circle"></i>
//                 </div>
//                 <div class="notice__warn-content">
//                     <h3 class="notice__warn-heading">Thông báo</h3>
//                     <span class="notice__warn-message">Nội dung đang trong quá trình hoàn thiện !</span>
//                 </div>
//             `
//             noticeWarn.appendChild(warning)

//             setTimeout(function() {
//                 noticeWarn.removeChild(warning)
//             },2500)
//         }
//     }
// }


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
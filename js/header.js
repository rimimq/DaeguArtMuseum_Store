

const header = document.querySelector('#Header');

fetch('../HTML/Header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data;
        init();
    });


function init() {
    const navbar = document.querySelector('.navbar');
    const modalSList = document.querySelectorAll('.modal-s');
    const modalBg = document.querySelector('#search-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeAni = document.querySelector('.btn-close');
    modalSList.forEach(item => {
        item.addEventListener('click', e => {
            const visibility = +modalContent.dataset.visibility;

            if (visibility === 0) { //꺼져있던 상태 > 켜야함.
                modalBg.style.display = 'block';
                navbar.style.backgroundColor = 'rgb(255, 255, 255)';
                modalContent.classList.add('modal-content-visible');
            } else { //켜져있던 상태 > 꺼야함
                modalBg.style.display = 'none';
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                modalContent.classList.remove('modal-content-visible');
            }
            modalContent.dataset.visibility = 1 - visibility;
        });

        // closeAni.addEventListener("animationend", function(e) {
        //     console.log("종료");
        // }, false);
    });





    const closebtn = document.querySelector('.banner-close');//상단 이벤트 배너 닫기버튼
    const closest = document.querySelector('.top-banner');
    closebtn.addEventListener('click', () => {
        closest.classList.add('banner_hidden');
    })

    const popupOpenText = document.querySelector('.banner-text');//상단 이벤트 배너
    const popup = document.querySelector('.banner-popup');//배너 클릭 시 나오는 이벤트 배너
    const popupCloseBtn = document.querySelector('.banner-item-btn-back');//배너 닫기 버튼
    const bannerOverlay1 = popup.querySelector('.banner-overlay');//배너 팝업 시 바탕

    bannerOverlay1.addEventListener('click', e => {
        popup.classList.add('popup-hidden');//이벤트 팝업 오픈 시 오버레이
    })
    popupOpenText.addEventListener('click', () => {
        popup.classList.remove('popup-hidden');//배너 글씨 누르면 팝업
    })
    popupCloseBtn.addEventListener('click', () => {
        popup.classList.add('popup-hidden');//팝업창 닫기
    })

    const cart = document.querySelector('#cart');
    const cartBtnClose = document.querySelector('.close_btn .fa-xmark');//장바구니 닫기
    const bannerOverlay2 = document.querySelector('.cart-overlay');//장바구니 슬라이드 시 배경

    const $cartMenuIcon = document.querySelector('div.H_NAV_Mobile .fa-cart-shopping');//카트 모바일 아이콘
    const $cartMenuText = document.querySelector('div.H_NAV_Desk .nav-cart');//카트 데스크탑 텍스트


    $cartMenuIcon.addEventListener('click', clkCart);
    $cartMenuText.addEventListener('click', clkCart);

    function clkCart() {
        bannerOverlay2.classList.remove('view_none');
        cart.classList.remove('cart-hidden');
    }

    cartBtnClose.addEventListener('click', e => {
        bannerOverlay2.classList.add('view_none');
        cart.classList.add('cart-hidden');
    })

    bannerOverlay2.addEventListener('click', e => {
        bannerOverlay2.classList.add('view_none');
        cart.classList.add('cart-hidden');
    })

    //채팅창
    const chtIcon = document.querySelector(".chat-icon");
    const chtScr = document.querySelector(".chat-screen");
    const xMark = document.querySelector(".xMark");

    chtIcon.addEventListener('click', () => {
        chtScr.classList.remove('d-none');
    })
    xMark.addEventListener('click', () => {
        chtScr.classList.add('d-none');
    })

    // const headerScroll = document.querySelector(".scollevent");
    // headerScroll.addEventListener("scroll", () => {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > scrollUp) {
    //         scrollevent.style.top = "-80px";
    //     } else {
    //         scrollevemt.style.top = "0";
    //     }
    //     scrollUp = scrollTop;
    // })
    let target = $('.menu-list-logo')
    target.each(function (i, v) {
        $(this).waypoint(function () {
            $(v).addclass('on')
        }, {
            offset: '100%'
        })
    })

}
// Kakao.init('4d07448985a8fbda12e7eea2ec1d345a');
// Kakao.isInitialized();
// console.log(Kakao.isInitialized());//초기화 판단여부

//햄버거
// document.querySelector('.btn-menu').addEventListener('click', ()=> {
//     this.classList.toggle('active');
// });

//카트모달
// let modal = document.getElementById("modal_btn");
// let btn = document.getElementById("myBtn");
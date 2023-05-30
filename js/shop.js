// const tabs = document.querySelectorAll("[data-tab-target]");
// const tabcon = document.querySelectorAll("[data-tab-content]");
// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     tabcon.forEach((tabc_all) => {
//       tabc_all.classList.remove("active");
//     });

//     target.classList.add("active");
//   });
// });

const productlist = {
    'tab1': [
        {
            img: '/img/damcup.jpg',
            name: '[onlyDAM] DAM 머그컵 set',
            type: 'Living',
            price: '38,000'
        },
        {
            img: '/img/damcandle.jpg',
            name: '[onlyDAM] DAM 캔들',
            type: 'Living',
            price: '15,000'
        },
        {
            img: '/img/hitonote.jpg',
            name: '[히토슈타이얼] 스프링노트',
            type: 'Stationery',
            price: '7,000'
        },
        {
            img: '/img/jeongdahaebook.jpg',
            name: '[정다혜] 전시도록',
            type: 'Book',
            price: '20,000'
        },
        {
            img: '/img/letter.jpg',
            name: '[onlyDAM] 엽서봉투',
            type: 'onlyDAM',
            price: '5,000'
        },
        {
            img: '/img/danieltape.png',
            name: '[다니엘뷔렌] 스티커 테이프',
            type: 'Stationery',
            price: '5,000'
        },
        {
            img: '/img/ebecandle.jpg',
            name: '[이배] 석고캔들',
            type: 'Living',
            price: '15,000'
        },
        {
            img: '/img/damframe3.jpg',
            name: '[onlyDAM] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000'
        },
        {
            img: '/img/danielphon.jpg',
            name: '[다니엘뷔렌] 폰케이스',
            type: 'Stationery',
            price: '12,000'
        }

    ],
    'tab2': [
        {
            img: '/img/jeongdahaeframe1.jpeg',
            name: '[정다혜] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/hotoframe.jpeg',
            name: '[히토슈타이얼] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/damframe1.jpg',
            name: '[onlyDAM] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/damframe3.jpg',
            name: '[onlyDAM] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/jeongdahaeframe2.jpg',
            name: '[정다혜] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/danielframe.jpg',
            name: '[다니엘뷔렌] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/ebaeframe.jpg',
            name: '[이배] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/img/jeongdahaeframe3.jpeg',
            name: '[정다혜] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        }
    ]
}

const $productListLayout = document.querySelector('div.product-list-layout');

for (prop in productlist) {
    const arr = productlist[prop];

    const container = document.createElement('div');
    container.dataset.view = prop;
    container.classList.add('item');

    if (prop !== 'tab1') {
        container.classList.add('view_none');
    }
    $productListLayout.append(container);

    arr.forEach(item => {
        const div = document.createElement('div');
        div.className = 'Items';

        div.innerHTML = `
            <a href="./shopdetail.html">
                <img class="Product_img" src="..${item.img}" alt="${item.name}">
                <div class="Product_type">${item.type}</div>
                <div class="Product_name">${item.name}</div>
                <div class="Product_price">₩${item.price}</div>
            </a>
        `;
        container.append(div);
    })
}



const $Btn = document.querySelectorAll('.KategorieBtn');
const $item = document.querySelectorAll('.item');
if ($Btn) {
    $Btn.forEach(item => {

        item.addEventListener('click', e => {
            $Btn.forEach(subItem => {
                subItem.classList.toggle('K_color', item === subItem);
            })

            $item.forEach(subItem => {
                subItem.classList.toggle('view_none', subItem.dataset.view !== e.target.dataset.view);
            })
        })
    })

};


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'Horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

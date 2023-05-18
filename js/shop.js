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
            img: '/IMG/컵1.jpg',
            name: '[onlyDAM] DAM 머그컵 set',
            type: 'Living',
            price: '38,000'
        },
        {
            img: '/IMG/dam_캔들.jpg',
            name: '[onlyDAM] DAM 캔들',
            type: 'Living',
            price: '15,000'
        },
        {
            img: '/IMG/히토_노트.jpg',
            name: '[히토슈타이얼] 스프링노트',
            type: 'Stationery',
            price: '7,000'
        },
        {
            img: '/IMG/정다혜 도록.jpg',
            name: '[정다혜] 전시도록',
            type: 'Book',
            price: '20,000'
        },
        {
            img: '/IMG/편지봉투.jpg',
            name: '[onlyDAM] 엽서봉투',
            type: 'onlyDAM',
            price: '5,000'
        },
        {
            img: '/IMG/다니엘뷔렌_테이프.png',
            name: '[다니엘뷔렌] 스티커 테이프',
            type: 'Stationery',
            price: '5,000'
        },
        {
            img: '/IMG/이배_캔들.jpg',
            name: '[이배] 석고캔들',
            type: 'Living',
            price: '15,000'
        },
        {
            img: '/IMG/dam_프레임3.jpg',
            name: '[onlyDAM] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000'
        },
        {
            img: '/IMG/다니엘뷔렌_폰케이스.jpg',
            name: '[다니엘뷔렌] 폰케이스',
            type: 'Stationery',
            price: '12,000'
        }

    ],
    'tab2': [
        {
            img: '/IMG/정다혜_프레인_블랙.jpeg',
            name: '[정다혜] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/히토슈타이얼_프레임.jpeg',
            name: '[히토슈타이얼] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/dam_프레임1.jpg',
            name: '[onlyDAM] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/dam_프레임3.jpg',
            name: '[onlyDAM] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/정다혜_프레임.jpg',
            name: '[정다혜] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/다니엘뷔렌_프레임.jpg',
            name: '[다니엘뷔렌] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/이배_프레임.jpg',
            name: '[이배] 포스터 + 프레임',
            type: 'Frame',
            price: '38,000 ₩'
        },
        {
            img: '/IMG/정다혜_프레임_화이트.jpeg',
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
            <a href="./Shop_detail.html">
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

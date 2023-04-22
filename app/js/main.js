$(function () {
$('.blog-home__slider-inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: '.blog-home__arrows',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
})


});

window.addEventListener('DOMContentLoaded', () => {
    const tabsItem = document.querySelector('.tabs__item');
    const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
    const tabsContent = document.querySelectorAll('.tabs__content');


if(tabsItem && tabsItemBtn && tabsContent) {
    function tabsHide() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabsItemBtn.forEach(btn => {
            btn.classList.remove('tabs-active');
        });
    }

    function tabsShow(i) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabsItemBtn[i].classList.add('tabs-active');
    }
    

 if(tabsItem) {
    tabsItem.addEventListener('click', (e) => {
        const target = e.target;
        if(target && target.classList.contains('tabs__item-btn')){
            tabsItemBtn.forEach((item, i) => {
                if(target == item){
                    tabsHide();
                    tabsShow(i);
                }
            })
        }
    })
 } 

 tabsHide();
 tabsShow(0);
} 
  

const bazaTabsItem = document.querySelector('.baza-tabs__item');
const bazaTabsItemBtn = document.querySelectorAll('.baza-tabs__item-btn');
const bazaTabsContent = document.querySelectorAll('.baza-tabs__content');

if(bazaTabsItem  && bazaTabsItemBtn && bazaTabsContent){
    function tabsBazaHide() {
        bazaTabsContent.forEach(item => {
            item.classList.add('hide-baza');
            item.classList.remove('show-baza');
        });
    
        bazaTabsItemBtn.forEach(btn => {
            btn.classList.remove('tabs-active')
        });
    }
    
    function tabsBazaShow(i) {
        bazaTabsContent[i].classList.add('show-baza');
        bazaTabsContent[i].classList.remove('hide-baza');
        bazaTabsItemBtn[i].classList.add('tabs-active');
    }
    
    if(bazaTabsItem){
        bazaTabsItem.addEventListener('click', (e) => {
            const target = e.target;
            if(target && target.classList.contains('baza-tabs__item-btn')){
                bazaTabsItemBtn.forEach((item, i) => {
                    if(target == item){
                        tabsBazaHide();
                        tabsBazaShow(i);
                    }
                })
            }
        })
    }
    
    
    tabsBazaHide();
    tabsBazaShow(0);
}


const blogHomeInnerHide = document.querySelectorAll('.blog-home__inner-hide');
const bazaTabsBtn = document.querySelectorAll('.baza-tabs__btn');

if(blogHomeInnerHide && bazaTabsBtn){
    bazaTabsBtn.forEach(item => {
        item.addEventListener('click', () => {
            blogHomeInnerHide.forEach(btn => {
                btn.classList.remove('blog-home__inner-hide')
            });
            item.classList.add('hide');
        })

    })
}


const menu = document.querySelector('.mobile-menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});
   
});


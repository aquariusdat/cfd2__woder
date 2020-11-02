let iMenu = document.getElementById('showmenu');
let menu = document.querySelector('header .header__navbar');
let langCurrent = document.querySelector('header .header__lang-current');
let langSelection = document.querySelector('header .header__lang-selection');
let btnCloseMenu = document.querySelector('.btnCloseMenu');
let langSelectionItem = document.querySelector('header .header__lang .header__lang-current .header__lang-selection .section__item')
// let header = document.querySelector('header');
document.querySelector('header .header__lang-current').addEventListener("click",function(e){
    e.stopPropagation();
    e.preventDefault();
    let selection = document.querySelector('header .header__lang-selection');
    
    if(this.classList.contains('clicked'))
    {
        this.classList.remove('clicked');
        // langSelection.style.display = 'none';
        selection.classList.remove('showlangsection');
    }
    else{
        this.classList.add('clicked');
        // langSelection.style.display = 'block';
        selection.classList.add('showlangsection');
    }
});
/***** MENU RESPONSIVE *****/
document.querySelector('.hamburger').addEventListener("click",function(e){

    e.stopPropagation();
    console.log(this);

    // if(menu.classList.contains('active')){
    //     menu.classList.remove('active');
    // }
    // else{
    //     menu.classList.add('active');
    // }
    menu.classList.toggle('active');
    
});
btnCloseMenu.addEventListener('click',function(e){
    e.stopPropagation();
    menu.classList.toggle('active');
})
document.body.addEventListener('click',function(){
    if(langCurrent.classList.contains('clicked'))
    {
        langCurrent.classList.remove('clicked');
        // langSelection.style.display = 'none';
        langSelection.classList.remove('showlangsection');
    }
    if(menu.classList.contains('active'))
    {
        menu.classList.remove('active');
    }
});



const sectionitem = document.querySelectorAll('header .container-fluid .header__lang .header__lang-current .header__lang-selection .section__item');
sectionitem.forEach(function(i)
{
    const item = i.querySelector('span');
    const textLangcurrent = document.querySelector('header .container-fluid .header__lang .header__lang-current a');
    item.addEventListener('click',function(){
        textLangcurrent.innerText = item.innerText;
    });
})

var lastScrollTop = 0;
const header = document.querySelector('header');
const slider = document.querySelector('main .slider');
const sliderbottom = document.querySelector('main .slider .slider__bottom');
// window.addEventListener('scroll',function(){
//     let scrollTop = document.querySelector('html').scrollTop;
//     if(scrollTop < (slider.offsetHeight - sliderbottom.offsetHeight*3))
//     {
//             header.style.backgroundColor = 'rgba(0,0,0,0.5)';
//     }
//     else
//     {
//         header.style.backgroundColor = 'black';
//     }
//     if(scrollTop > lastScrollTop)
//     {
//         header.style.transform = "translateY(-100%)";
//     }
//     else
//     {
//         header.style.transform = "translateY(0%)";
//     }
//     lastScrollTop = scrollTop;
// })

const backToTop = document.querySelector('footer .container a');
backToTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollBy({
        top: -(document.querySelector('main').offsetHeight + document.querySelector('footer').offsetHeight +
        document.querySelector('header').offsetHeight),
        behavior:'smooth'
    });
});

//slider
let sliderCurrent = 0;
const slideritems = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.control .prev-btn');
const nextBtn = document.querySelector('.control .next-btn');
const sliderNumber = document.querySelector('main .slider .slider__bottom .container-fluid .paging .number');
const dotSlider =  document.querySelectorAll('main .slider .slider__bottom .container-fluid .paging .dot ol li');
prevBtn.addEventListener('click',function(e){
    e.preventDefault();
    sliderCurrent--;
    if(sliderCurrent >= 0)
    {
        slideritems[sliderCurrent+1].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[sliderCurrent+1].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
    else
    {
        sliderCurrent = slideritems.length-1;
        slideritems[0].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[0].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
});

nextBtn.addEventListener('click',function(e){
    e.preventDefault();
    sliderCurrent++;
    if(sliderCurrent < slideritems.length)
    {
        slideritems[sliderCurrent-1].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[sliderCurrent-1].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
    else{
        sliderCurrent = 0;
        slideritems[slideritems.length-1].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[slideritems.length-1].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
});
// pop-up video
const popVideo = document.querySelector('.pop-video');
const btnPlayVideo = document.querySelectorAll('main .quality .container .quality__video .quality__video-item .item__wrapper-img div span');
const btnCloseVideo = document.querySelector('.pop-video .close');
btnPlayVideo.forEach((e) => {
    e.addEventListener('click',() =>{
        popVideo.classList.add('active');
    })
})

btnCloseVideo.addEventListener('click',function(){
    if(popVideo.classList.contains('active'))
    {
        popVideo.classList.remove('active');
    }
    console.log('1');
});


// event scroll menu
let itemMenu = $('.header__list li a');

let section = [];

for(let i=0;i<itemMenu.length;i++)
{
    let selector = $(itemMenu[i]).attr('data-section');
    // let rs = selector;
    section.push(selector);
}
function scrollActiveMenu(nameSelector){
    let scrollTop = $(window).scrollTop();
    let topSection = $(nameSelector).position().top;
    let heightSection = $(nameSelector).outerHeight();

    let offset = 0;
    let heightWindow = $( window ).height();
    if(heightWindow > heightSection)
    {
        offset=(heightWindow - heightSection+header.offsetHeight)/2;
    }
    if(scrollTop+offset >= topSection && scrollTop+offset <= topSection+heightSection)
    {
        itemMenu.removeClass('active');
        itemMenu.filter('[data-section="'+nameSelector+'"]').addClass('active');
    }
    else
    {
        itemMenu.filter('[data-section="'+nameSelector+'"]').removeClass('active');
    }


}
console.log(section);
$(window).on('scroll',function(){
    // let scrollTop = $(window).scrollTop();

    
    // let topSection = $('.product').position().top;
    // let heightSection = $('.product').outerHeight();

    // if(scrollTop > topSection && scrollTop < topSection+heightSection)
    // {
    //     itemMenu.removeClass('active');
    //     itemMenu.filter('[data-section=".product"]').addClass('active');
    // }
    // else
    // {
    //     itemMenu.filter('[data-section=".product"]').removeClass('active');
    // }
    // scrollActiveMenu('.product');
    // scrollActiveMenu('.aboutus');
    // topSection = $('.aboutus').position().top;
    // heightSection = $('.aboutus').outerHeight();
    
    // if(scrollTop > topSection && scrollTop < topSection+heightSection)
    // {
    //     itemMenu.removeClass('active');
    //     itemMenu.filter('[data-section=".aboutus"]').addClass('active');
    // }
    // else
    // {
    //     itemMenu.filter('[data-section=".aboutus"]').removeClass('active');
    // }
    // scrollActiveMenu('.gallery');
    // topSection = $('.gallery').position().top;
    // heightSection = $('.gallery').outerHeight();
    
    // if(scrollTop > topSection && scrollTop < topSection+heightSection)
    // {
    //     itemMenu.removeClass('active');
    //     itemMenu.filter('[data-section=".gallery"]').addClass('active');
    // }
    // else
    // {
    //     itemMenu.filter('[data-section=".gallery"]').removeClass('active');
    // }
    // scrollActiveMenu('.news');
    // topSection = $('.news').position().top;
    // heightSection = $('.news').outerHeight();
    
    // if(scrollTop > topSection && scrollTop < topSection+heightSection)
    // {
    //     itemMenu.removeClass('active');
    //     itemMenu.filter('[data-section=".news"]').addClass('active');
    // }
    // else
    // {
    //     itemMenu.filter('[data-section=".news"]').removeClass('active');
    // }
    // for(let i = 0 ; i<itemMenu.length;i++)
    // {
    //     let topSection = section[i].position().top;
    //     let heightSection = section[i].outerHeight;
    // }

    for(let i=0;i<itemMenu.length;i++)
    {
        scrollActiveMenu(section[i]);
    }
});
let liMenu = $('.header__list li a');
liMenu.hover(function(){
    $(this).removeClass('gray').siblings().addClass('gray');
    console.log('hover');
},function(){
    liMenu.removeClass('gray');
    console.log('leave');
})

// replace hash
// let hashUrl = window.location.hash;

// hashUrl = hashUrl.replace('#','');

// $('html').animate({
//     scrollTop: $('#'+hash).position().top
// },1000)


// stickity
let $carousel = $('.slider__list');
$('.slider__list').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        ready: function() {
          console.log('Flickity is ready');
        }
    }
  });

  $('.prev-btn').on( 'click', function() {
    $carousel.flickity('previous');
  });

  $('.next-btn').on( 'click', function() {
    $carousel.flickity('next');
  });

// $carousel.flickity({
//     on: {
//       ready: function() {
//         console.log('Flickity is ready');
//       },
//       change: function( index ) {
//         console.log( 'Slide changed to' + index );
//       }
//     }
//   });




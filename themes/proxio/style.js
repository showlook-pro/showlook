/* eslint-disable react/no-unknown-property */

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
    return <style jsx global>{`

    // 底色
    body{
        background-color: white;
    }
    .dark body{
        background-color: black;
    }

    #theme-proxio .bg-primary {
        --tw-bg-opacity: 1;
        background-color: #121212;
    }
    
    @media (min-width: 540px) {
        #theme-proxio .container {
            max-width: 540px;
        }
    }
    @media (min-width: 720px) {
        #theme-proxio .container {
            max-width: 720px;
        }
    }
    
    @media (min-width: 960px) {
        #theme-proxio .container {
            max-width: 960px;
        }
    }
    @media (min-width: 1140px) {
        #theme-proxio .container {
            max-width: 1140px;
        }
    }
        
    @media (min-width: 1536px) {
        #theme-proxio .container {
            max-width: 1140px;
        }
    }
        

    #theme-proxio .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 16px;
        padding-left: 16px;
    }

  #theme-proxio .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.8);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  

  .dark\:bg-dark:is(.dark *) {
    background-color: black!important;
 }

  :is(.dark #theme-proxio .sticky){
    background-color: rgb(17 25 40 / 0.8);
  }
  
  #theme-proxio .sticky {
    -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  #theme-proxio .sticky .navbar-logo{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  #theme-proxio .sticky #navbarToggler span{
    --tw-bg-opacity: 1;
    background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarToggler span){
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  #theme-proxio .sticky #navbarCollapse li > a{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky #navbarCollapse li > a:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }

  #theme-proxio .sticky #navbarCollapse li > button{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarCollapse li > a){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarCollapse li > a:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }

  :is(.dark #theme-proxio .sticky #navbarCollapse li > button){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  #theme-proxio .ud-header.nav-solid .header-logo-text,
  #theme-proxio .ud-header.nav-solid .ud-menu-scroll,
  #theme-proxio .ud-header.nav-solid .submenu-item > button{
    color: #ffffff;
  }

  #theme-proxio .ud-header.nav-transparent.nav-inner .header-logo-text,
  #theme-proxio .ud-header.nav-transparent.nav-inner .ud-menu-scroll,
  #theme-proxio .ud-header.nav-transparent.nav-inner .submenu-item > button{
    color: #111928;
  }

  #theme-proxio .ud-header.nav-transparent.nav-home .header-logo-text,
  #theme-proxio .ud-header.nav-transparent.nav-home .ud-menu-scroll,
  #theme-proxio .ud-header.nav-transparent.nav-home .submenu-item > button{
    color: #ffffff;
  }

  #theme-proxio .ud-header.nav-transparent.nav-inner #navbarToggler span{
    background-color: #111928;
  }

  #theme-proxio .ud-header.nav-solid #navbarToggler span{
    background-color: #ffffff;
  }

  #theme-proxio .ud-header .header-logo-icon{
    transition: filter 0.2s ease;
  }

  #theme-proxio .ud-header .header-logo-icon{
    filter: brightness(0) invert(1);
  }

  html:not(.dark) #theme-proxio .footer-logo-icon{
    filter: none;
  }

  html.dark #theme-proxio .footer-logo-icon{
    filter: brightness(0) invert(1);
  }

  @media (max-width: 959px) {
    #theme-proxio #navbarCollapse .ud-menu-scroll,
    #theme-proxio #navbarCollapse .submenu-item > button{
      color: #111928;
    }

    #theme-proxio #navbarCollapse .submenu a{
      color: #111928;
    }

    html.dark #theme-proxio #navbarCollapse .ud-menu-scroll,
    html.dark #theme-proxio #navbarCollapse .submenu-item > button,
    html.dark #theme-proxio #navbarCollapse .submenu a{
      color: #ffffff;
    }
  }

  @media (min-width: 960px) {
    html.dark #theme-proxio #navbarCollapse .ud-menu-scroll,
    html.dark #theme-proxio #navbarCollapse .submenu-item > button,
    html.dark #theme-proxio #navbarCollapse .submenu a{
      color: #ffffff;
    }
  }


  #navbarCollapse li .ud-menu-scroll.active{
    opacity: 0.7;
  }
  
  #theme-proxio .sticky #navbarCollapse li .ud-menu-scroll.active{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  #theme-proxio .sticky .loginBtn{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .loginBtn:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  :is(.dark #theme-proxio .sticky .loginBtn){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky .loginBtn:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .signUpBtn{
    --tw-bg-opacity: 1;
    background-color: rgb(55 88 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .signUpBtn:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(27 68 200 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky #themeSwitcher ~ span{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #themeSwitcher ~ span){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  .navbarTogglerActive > span:nth-child(1){
    top: 7px;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .navbarTogglerActive > span:nth-child(2){
    opacity: 0;
  }
  
  .navbarTogglerActive > span:nth-child(3){
    top: -8px;
    --tw-rotate: 135deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .text-body-color{
    --tw-text-opacity: 1;
    color: rgb(99 115 129 / var(--tw-text-opacity));
  }
  
  .text-body-secondary{
    --tw-text-opacity: 1;
    color: rgb(136 153 168 / var(--tw-text-opacity));
  }

  #theme-proxio .scroll-hint__text{
    letter-spacing: 0.08em;
  }

  @keyframes scroll-hint-float{
    0%{
      transform: translateY(-2px);
      opacity: 0.35;
    }
    50%{
      transform: translateY(6px);
      opacity: 0.7;
    }
    100%{
      transform: translateY(-2px);
      opacity: 0.35;
    }
  }

  @keyframes scroll-hint-fade{
    0%{
      opacity: 0.35;
    }
    50%{
      opacity: 0.7;
    }
    100%{
      opacity: 0.35;
    }
  }

  #theme-proxio .proxio-blog-card{
    position: relative;
    display: block;
  }

  #theme-proxio .proxio-blog-card__image{
    display: block;
    transition: transform 0.5s ease, filter 0.3s ease, opacity 0.3s ease;
  }

  #theme-proxio .proxio-blog-card__overlay{
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    text-align: center;
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(6px);
            backdrop-filter: blur(6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  #theme-proxio .proxio-blog-card__summary{
    max-width: 370px;
    font-size: 1rem;
    line-height: 1.6;
    color: rgb(17 25 40);
  }

  #theme-proxio .proxio-blog-card:hover .proxio-blog-card__image{
    filter: blur(6px);
    opacity: 0.4;
    transform: scale(1.03);
  }

  #theme-proxio .proxio-blog-card:hover .proxio-blog-card__overlay{
    opacity: 1;
  }

  :is(.dark #theme-proxio .proxio-blog-card__overlay){
    background-color: rgba(0, 0, 0, 0.6);
  }

  :is(.dark #theme-proxio .proxio-blog-card__summary){
    color: rgb(255 255 255);
  }

  
.common-carousel .swiper-button-next:after,
.common-carousel .swiper-button-prev:after{
  display: none;
}

.common-carousel .swiper-button-next,
.common-carousel .swiper-button-prev{
  position: static !important;
  margin: 0px;
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(17 25 40 / var(--tw-text-opacity));
  --tw-shadow: 0px 8px 15px 0px rgba(72, 72, 138, 0.08);
  --tw-shadow-colored: 0px 8px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.common-carousel .swiper-button-next:hover,
.common-carousel .swiper-button-prev:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(55 88 249 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

:is(.dark .common-carousel .swiper-button-next),:is(.dark 
.common-carousel .swiper-button-prev){
  --tw-bg-opacity: 1;
  background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.common-carousel .swiper-button-next svg,
.common-carousel .swiper-button-prev svg{
  height: auto;
  width: auto;
}
  `}</style>
}

export { Style }

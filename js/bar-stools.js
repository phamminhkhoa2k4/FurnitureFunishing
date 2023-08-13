

// Emulator API 
var mockData = [
    {
        category:'',
        picture:'./asset/img/bar-stools-a.jpg',
        picture1:'./asset/img/bar-stools-a-1.jpg',
        picture2:'./asset/img/bar-stools-a-2.jpg',
        imgcolor1:'./asset/img/mautrang.png',
        imgcolor2:'./asset/img/mautrang.png',
        imgcolor3:'./asset/img/mautrang.png',
        imgcolor4:'./asset/img/mautrang.png',
        color:'#fff',
        color1:'#fff',
        color2: '#fff',
        color3: '#fff',
        brand:'Vista',
        name:'VISTA ESSEX COUNTER STOOL ',
        price:'499'
    },
    {
        category:'',
        picture:'./asset/img/bar-stools-b.jpg',
        picture1:'./asset/img/bar-stools-b-1.jpg',
        picture2:'./asset/img/bar-stools-b-2.jpg',
        imgcolor1:'./asset/img/trangkem.jpg',
        imgcolor2:'./asset/img/trangkem.jpg',
        imgcolor3:'./asset/img/trangkem.jpg',
        imgcolor4:'./asset/img/trangkem.jpg',
        color:'#deb887',
        color1:'#deb887',
        color2: '#deb887',
        color3: '#deb887',
        brand:'Vista',
        name:'VISTA BOCA WOVEN STOOL',
        price:'499'
    },
    {
        category:'',
        picture:'./asset/img/bar-stools-c.jpg',
        picture1:'./asset/img/bar-stools-c-1.jpg',
        picture2:'./asset/img/bar-stools-c-2.jpg',
        picture3:'./asset/img/bar-stools-c-3.jpg',
        imgcolor1:'./asset/img/mauden.jpg',
        imgcolor2:'./asset/img/mauxam.jpeg',
        imgcolor3:'./asset/img/maunau.jpg',
        imgcolor4:'./asset/img/maubac.jpeg',
        color:'#000',
        color1:'#808080',
        color2:'brown',
        color3:'silver',
        brand:'Vintage series',
        name:'24 ADJUSTABLE BAR STOOL ',
        price:'1,199'
    },
    {
        category:'',
        picture:'./asset/img/bar-stools-d.jpg',
        picture1:'./asset/img/bar-stools-d-1.jpg',
        picture2:'./asset/img/bar-stools-d-2.jpg',
        picture3:'./asset/img/bar-stools-d-3.jpg',
        imgcolor1:'./asset/img/mauden.jpg',
        imgcolor2:'./asset/img/mautrang.png',
        imgcolor3:'./asset/img/maunau.jpg',
        imgcolor4:'./asset/img/mauden.jpg',
        color:'#000000',
        color1:'#000000',
        color2: '#946b00',
        color4:'#fff',
        brand:'Sun valley',
        name:'3-PACK CONSOLE STOOLS - SUN VALLEY',
        price:'3,699'
    },
    {
        category:'',
        picture:'./asset/img/bar-stools-e.jpg',
        imgcolor1:'./asset/img/mauden.jpg',
        imgcolor2:'./asset/img/xamxanh.jpg',
        imgcolor3:'./asset/img/xamxanh.jpg',
        imgcolor4:'./asset/img/mauden.jpg',
        color:'#000000',
        color1:'grey',
        brand:'DBI',
        name:'BAR STOOL GREY/BRASS',
        price:'3,889'
    },
    
    
];
var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$window){
    $scope.products = mockData ;
    
    $scope.officeDetail = function(product){
        $window.scrollTo(0,0);
        var html = `
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <link rel="stylesheet" href="./asset/css/style.css">
        <link rel="stylesheet" href="./asset/css/breadcrumb.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

        <title>Document</title>
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                list-style: none;
                text-decoration:none;
            }
            #detail{
                margin: 32px 0;
            }
            .detail-wrapper{
                margin: auto;
                max-width: 1200px;
                padding-left: 10px;
                padding-right: 10px;
                width: 100%;
            }
            .detail-item{
                float:left;
                padding-left: 20px;
                width: 50%;
            }
            .detail-img-main{
                text-align: center;
                position: relative;
            }
    
            /* responsive */
            @media only screen and (max-width: 767px){
                #detail{
                    margin: 24px 0;
                }
            }
            @media (max-width:767px){
                .detail-wrapper{
                    padding-right: 20px;
                    padding-left: 20px;
                }
                .detail-item{
                    width: 100%;
                }
            }
            @media only screen and (max-width: 1020px){
                .detail-item-content-container{
                    margin-top: 24px;
                    padding-left: 0;
                }
            }
            .detail-thumbnail-slider{
                position: relative;
                display:block;
                margin-bottom: 30px;
                
            }
            .detail-thumbnail-icon-left{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                cursor: pointer;
                height: 100%;
                width: 20px;
                background: #dadada;
            }
            .detail-thumbnail-icon-right{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 0;
                top: 0;
                z-index: 2;
                cursor: pointer;
                height: 100%;
                width: 20px;
                background: #dadada;
            }
            .detail-thumbnail-slider{
                position: relative;
                display: block;
                overflow: hidden;
                margin: 0;
                padding: 0;
            }
            .thumbnail-slider-image-wrapper{
                position: relative;
                top: 0;
                left: 0;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            .thumbnail-image-inner{
                display:block;
                float:left;
                height: 100%;
                max-width: 80px;
                margin: auto 2px;
            }
            .thumbnail-image-inner:first-child{
                margin-left: 30px;
            }
            .thumbnail-img{
                max-width: 100%;
                max-height:80px;
            }
            .detail-item-content-wrapper{
                position: relative;
                z-index: 2;
            }
            .detail-brand{
                color: #000;
                display: inline-block;
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 2px;
                line-height: 2;
                padding-right: 110px;
                text-transform: uppercase;
            }
            .detail-title{
                font-size: 30px;
                font-weight: 400;
                margin-left: 40px;
            }
            .detail-price-wrapper{
                display: block;
                font-size: 0;
                margin: 30px 0 0;
            }
            .detail-price{
                color:#000;
                margin-left: 190px;
                font-size: 20px;
                font-weight: 500;
            }
            .detail-form{
                padding-bottom: 24px;
                margin: 0;
            }
            .detail-option-container{
                border-bottom: 1px solid #dadadada;
                border-top: 1px solid #dadadada;
                margin: 24px 0;
                padding-top: 24px;
            }
            .option-wrapper{
                border: none;
                margin: 0 0 24px ;
                padding: 0;
            }
            .option-wrapper-title{
                font-size: 14px;
                display: flex;
                justify-content: flex-start;
                padding: 0;
                width: 100%;
                color: #000;
                display: block;
                font-weight: 700;
                letter-spacing: 2px;
                line-height: 2;
                margin: 0 0 8px;
                text-transform: uppercase;
            }
            .option-wrapper-image-color{
                border: 2px solid #80808080;
                border-radius: 8px;
                display: inline-block;
                font-size: 0;
                margin: 4px 4px 0 0;
                padding: 2px;
            }
            .infoshipping-wrapper-image-color-img{
                border: 1px solid #dadadada;
                border-radius: 4px;
                display: block;
                height: 40px;
                width: 40px;
            }
            .detail-add-cart-container{
                background-color: #fefefe;
                padding: 24px;
            }
            .detail-add-cart-container-wrapper{
                display: flex;
                align-items: center;
                flex-wrap:wrap;
            }
            .detail-add-cart-price{
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 2px;
                line-height: 1.5;
                padding-left: 20px;
                text-align: center;
                width: 150px;
                color:#000;
             }
             .detail-add-cart-quality{
                width: 20%;
                padding-left: 20px;
             }
             .detail-add-cart-quality input{
                height: 40px;
                width: 60px;
                padding-left:20px;
                outline: none;
             }
             .detail-add-cart-btn{
                max-width: 100%;
                padding-left: 20px;
                flex-grow: 1;
             }
             .detail-add-cart-btn button{
                padding: 10px;
                line-height: 2;
                width: 100%;
                font-size: 14px;
                font-weight: 700;
                border: none;
                outline: none;
                background: #663300;
                color: #fff;
             }
             .detail-infoshipping-container{
                border-top: 1px solid #dadada;
                padding: 24px 0;
             } 
             .detail-infoshipping-container ul li{
                color: #000;
                font-size: 14px;
                font-weight: 400;
                line-height: 2;
                margin: 8px 0 0;
                text-transform: none;
                
             }
             .detail-infoshipping-container ul li i{
                font-size: 15px;
             }
             .detail-infoshipping-container ul li strong{
                font-weight: 600;
             }
             .detail-img-main-wrapper img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;
             }
             .active{
                border: 3px solid red;
             }
            #footer{
                top:905px;
            }
            @media (max-width:767px){
                #footer{
                    top:1560px;
                }
            }
        </style>
    </head>
    <body>
        
        <!--  -->
        <div id="header">
            <div class="container">
                <div class="container-wrapper">
                    <button class="header-menu-btn">
                        <div class="header-menu-btn-icon">
                            <span class="icon-open js-open"><i class='bx bx-menu'></i></span>
                            <span class="icon-close hide js-close"><i class='bx bx-x'></i></span>
                        </div>
                    </button>
                    <h1 class="header-logo">
                        <a href="/" class="header-logo-image">
                            <img class="image" src="./asset/img/Logo.jpg" alt="">
                        </a>
                    </h1>
                    <div class="header-search hidden-search">
                        <form action="" class="header-search-wrapper" >
                            <label for="link-label" class="label-hidden">Search</label>
                            <input type="hidden" autocomplete="off">
                            <input type="search" placeholder="Search"  class="header-search-input" id="link-label">
                            <button  type="submit" class="header-search-btn">
                                <span><i class='bx bx-search'></i></span>
                            </button>
                        </form>
                    </div>
                    <div class="header-action-wrapper">
                        <ul class="header-action">
                            <li class="header-action-item"><a href="./feedback2.html" class="link-action"><i class='bx bx-pencil'></i><span class="header-action-text-hidden">Feed Back</span></a></li>
                            <li class="header-action-item js-sign-in"><a href="" class="link-action"><i class='bx bx-user-circle'></i><span class="header-action-text-hidden">Sign In</span></a></li>
                            <li class="header-action-item "><a href="./shiping_page.html" class="link-action link-action-cart-active"><i class='bx bx-cart'></i><span class="header-action-text-hidden">My Cart</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="navigation-wrapper">
                <nav class="header-navbar">
                    <ul class="header-navbar-list">
                        <li class="header-navbar-item">
                            <a href="./home.html" class="header-navbar-link">Home</a>
                        </li>
                        <li class="header-navbar-item">
                            <a href="./furniture.html" class="header-navbar-link">Furniture</a>
                        </li>
                        <li class="header-navbar-item">
                            <a href="./homeOffice.html" class="header-navbar-link">Home Office</a>
                        </li>
                        <li class="header-navbar-item">
                            <a href="./Livingroom.html" class="header-navbar-link">Living Room</a>
                        </li>
                        <li class="header-navbar-item">
                            <a href="./Bedroom.html" class="header-navbar-link">Bed Room</a>
                        </li>
                        <li class="header-navbar-item">
                            <a href="./DiningRoom.html" class="header-navbar-link">Dining Room</a>
                        </li>
                        <li class="header-navbar-item">
                            <a href="./Outdoor.html" class="header-navbar-link">Outdoor</a>
                        </li>
                    </ul>
                </nav>
            </div> 
            <div id="header-search" class="header-sub-search-wrapper">
                <div class="header-sub-search">
                    <form action="">
                        <input type="hidden" autocomplete="off">
                        <input type="search" class="header-sub-search-input" placeholder="Search" autocomplete="off">
                        <div></div>
                        <button type="submit" class="header-sub-search-btn">
                            <span><i class='search-icon bx bx-search'></i></span>
                        </button>
                    </form>
                </div>
            </div>
            <div class="navigation-sub-wrapper js-taskbar is-active">
                <nav class="header-sub-navbar">
                    <ul class="header-sub-navbar-list">
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">Home</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">Furniture</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">Home Office</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">Living Room</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">Bed Room</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">Dining Room</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                        <li class="header-sub-navar-item">
                            <a href="" class="header-sub-navbar-link">
                                <span class="header-sub-navbar-label">OutDoor</span>
                                <div class="header-sub-navbar-icon">
                                    <i class='bx bx-chevron-right'></i>
                                </div>
                            </a>
                            <div class="header-sub-navbar-dropdown"></div>
                        </li>
                    </ul>
                    <div class="header-bottom-sub-navbar">
                        <ul class="header-bottom-sub-navbar-action">
                            <li class="header-bottom-sub-navbar-action-item">
                                <a href="" class="header-bottom-sub-navbar-action-link">
                                    <i class='bx bx-user-circle'></i>
                                    <span>Sign In</span>
                                </a>
                            </li>
                        </ul>
                        <div class="header-bottom-sub-navbar-shopinfo">
                            <div class="header-bottom-sub-navbar-shopinfo-title">Need Help? Contact Us</div>
                            <div class="header-bottom-sub-navbar-shopinfo-phone">
                                <a href="">0783650619</a>
                            </div>
                            <div class="header-bottom-sub-navbar-shopinfo-openhours">7am - 9pm</div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- content-main -->
        <div id="main">
            <div>
            <ul class="breadcrumb" style="padding-left:40px">
                <li><a href="./home.html"><i class='bx bx-home'></i></a></li>
                <li><a href="./furniture.html">Furniture</a></li>
                <li><a href="./homeOffice.html">Home Office</a></li>
                <li>Product Detail</li>
            </ul>
                <div id="detail">
                    <div class="detail-wrapper">
                        <div class="detail-inner">
                            <div class="detail-item">
                                <div class="detail-image-container">
                                    <div class="detail-img-main">
                                        <div class="detail-img-main-wrapper">
                                            <img src="${product.picture}" alt="" class="main-image">
                                        </div>
                                        
                                    </div>
                                    <div class="detail-thumbnail-slider">
                                        <div class="detail-thumbnail-icon-left"><i class='bx bx-first-page'></i></div>
                                        <div class="detail-thumbnail-slider" style="width: auto;">
                                            <div class="thumbnail-slider-image-wrapper">
                                                <div class="thumbnail-image-inner">
                                                    <img src="${product.picture}" alt="" class="thumbnail-img">
                                                </div>
                                                <div class="thumbnail-image-inner">
                                                    <img src="${product.picture1}" alt="" class="thumbnail-img">
                                                </div>
                                                <div class="thumbnail-image-inner">
                                                    <img src="${product.picture2}" alt="" class="thumbnail-img">
                                                </div>
                                                <div class="thumbnail-image-inner">
                                                    <img src="${product.picture3}" alt="" class="thumbnail-img">
                                                </div>
                                                <div class="thumbnail-image-inner">
                                                    <img src="${product.picture4}" alt="" class="thumbnail-img">
                                                </div>
                                                <div class="thumbnail-image-inner">
                                                    <img src="${product.picture5}" alt="" class="thumbnail-img">
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="detail-thumbnail-icon-right"><i class='bx bx-last-page'></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-item-content-container">
                                    <div class="detail-item-content-wrapper">
                                        <div>
                                            <p class="detail-brand">${product.brand}</p><br><br>
                                            <span class="detail-title">${product.name}</span>
                                        </div>
                                        <div class="detail-price-wrapper">
                                            <div class="detail-price"><span>$${product.price}</span></div>
                                        </div>
                                    </div>
                                    <form action="" class="detail-form">
                                        <div class="detail-option-container">
                                            <div class="option-wrapper">
                                                <div class="option-wrapper-title">
                                                    <span><strong>Color</strong></span>
                                                </div>
                                                <div class="option-wrapper-image">
                                                    <div class="option-wrapper-image-color">
                                                        <img src="${product.imgcolor1}" alt="" class="infoshipping-wrapper-image-color-img">
                                                    </div>
                                                    <div class="option-wrapper-image-color">
                                                        <img src="${product.imgcolor2}" alt="" class="infoshipping-wrapper-image-color-img">
                                                    </div>
                                                    <div class="option-wrapper-image-color">
                                                        <img src="${product.imgcolor3}" alt="" class="infoshipping-wrapper-image-color-img">
                                                    </div>
                                                    <div class="option-wrapper-image-color">
                                                        <img src="${product.imgcolor4}" alt="" class="infoshipping-wrapper-image-color-img">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="detail-add-cart-container">
                                            <div class="detail-add-cart-container-wrapper">
                                                <div class="detail-add-cart-price"><span>$${product.price}</div>
                                                <div class="detail-add-cart-quality">
                                                    <input type="number" min="0">
                                                </div>
                                                <div class="detail-add-cart-btn">
                                                    <button>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>       
                                    <div class="detail-infoshipping-container">
                                        <ul>
                                            <li>
                                                <span><i class='bx bxs-wallet'></i></span>
                                                <strong>Shipping Cost</strong>
                                                Free Ship
                                            </li>
                                            <li>
                                                <span><i class='bx bx-time' ></i></span>
                                                <strong>Shipping Time</strong>
                                                ships in 2 - 7 days
                                            </li>
                                            <li>
                                                <span><i class='bx bx-shield'></i></span>
                                                <strong>Shop With Confidence</strong>
                                                 30 Day Returns
                                            </li>
                                        </ul>
                                    </div>
                                </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div id="content">
            <div class="slider"></div>
            <div class="subcontent"></div>
        </div> -->
        <div id="footer"  >
            <div class="footer-icon-row">
                <div class="footer-icon-row-wrapper">
                    <div class="footer-column-icon-row">
                        <div class="footer-column-icon">
                            <img src="https://cdn.shopify.com/s/files/1/0265/0083/files/shipping_40x.png?v=1617154692" alt="">
                        </div>
                        <div>
                            <p class="column-title">100% PRICE MATCH GUARANTEE</p>
                        </div>
                    </div>
                    <div class="footer-column-icon-row">
                        <div class="footer-column-icon">
                            <img src="https://cdn.shopify.com/s/files/1/0265/0083/files/shipping_40x.png?v=1617154704" alt="">
                        </div>
                        <div>
                            <p class="column-title">EASY 30 DAY RETURN POLICY</p>
                        </div>
                    </div>
                    <div class="footer-column-icon-row">
                        <div class="footer-column-icon">
                            <img src="https://cdn.shopify.com/s/files/1/0265/0083/files/shipping_40x.png?v=1617154609" alt="">
                        </div>
                        <div>
                            <p class="column-title">FREE SHIPPING OVER $50</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="final">
                <div class="footer-content">
                    <div class="footer-content-wrapper">
                        <div class="footer-social footer-social-menu js-social-menu">
                            <h6 class="footer-content-title">  
                                HELP & SUPPORT
                                <span class="footer-content-title-icon">
                                    <i class='js-plus bx bx-plus'></i>
                                    <i class='js-minus bx bx-minus hide'></i>
                                </span>
                            </h6>
                            <ul class="footer-content-list js-footer-content-list "style="max-height:252px ">
                                <li class="footer-content-item"><a href="" class="footer-content-link">CONTACT US</a></li>
                                <!-- <li class="footer-content-item"><a href="" class="footer-content-link">ORDERING</a></li>
                                <li class="footer-content-item"><a href="" class="footer-content-link">SHIPPING</a></li>
                                <li class="footer-content-item"><a href="" class="footer-content-link">DISCOUNTS</a></li> -->
                            </ul>
                        </div>
                        <div class="footer-social footer-social-menu js-social-menu">
                            <h6 class="footer-content-title">
                                ABOUT Hudson Furnishing 
                                <span class="footer-content-title-icon">
                                    <i class='js-plus bx bx-plus'></i>
                                    <i class='js-minus bx bx-minus hide'></i>
                                </span>
                            </h6>
                            <ul class="footer-content-list js-footer-content-list" style="max-height:252px">
                                <li class="footer-content-item"><a href="" class="footer-content-link">ABOUT US</a></li>
                                <!-- <li class="footer-content-item"><a href="" class="footer-content-link">PRESS</a></li>
                                <li class="footer-content-item"><a href="" class="footer-content-link">DESIGN BLOG</a></li>
                                <li class="footer-content-item"><a href="" class="footer-content-link">ACCESSIBILITY</a></li> -->
                            </ul>
                        </div>
                        <div class="footer-social  footer-social-subscribe-wrapper">
                            <div class="footer-social-contact">
                                <h6 class="footer-content-title">TRADE PROGRAM</h6>
                                <div class="footer-social-contact-text">
                                   
                                    
                                </div>
                            </div>
                            <div class="footer-social-subscribe">
                                <h6 class="footer-content-title">CUSTOMER SERVICE</h6>
                                <div class="footer-social-subscribe-text">
                                    <p>0783650619 | 6am-9pm<br></p>
                                </div>
                            </div>
                            <div class="footer-social-subscribe">
                                <h6 class="footer-content-title"></h6>
                                <div class="footer-social-subscribe-text">
                                    <p><br></p>
                                </div>
                            </div>
                            <div class="footer-social-subscribe">
                                <ul class="footer-social-list">
                                    <li><a href=""><i class='bx bxl-facebook'></i></a></li>
                                    <li><a href=""><i class='bx bxl-twitter' ></i></a></li>
                                    <li><a href=""><i class='bx bxl-instagram' ></i></a></li>
                                    <li><a href=""><i class='bx bxl-tiktok' ></i></a></li>
                                    <li><a href=""><i class='bx bxl-youtube' ></i></a></li>
                                    <li><a href=""><i class='bx bxl-discord-alt' ></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-final">
                    <div class="footer-final-wrapper">
                        <div class="footer-final-content footer-final-content-text">&copy 2001-2023 Hudson Furnishing · VietNam , CT </div>
                        <div class="footer-final-content footer-final-content-text">
                            <ul class="footer-content-list">
                                <li><a href="" class="footer-content-item">Site Map</a></li>
                                <li><a href="" class="footer-content-item">Aptech</a></li>
                                
                            </ul>
                        </div>
                        <div class="footer-final-content Khoa">
                            <div class="footer-final-images">
                                <a href="" class="footer-final-images-link">
                                    <img src="./asset/img/CUSC.png" alt="" width="140px" height="35px">
                                </a>
                                <a href="" class="footer-final-images-link">
                                    <img src="./asset/img/Aptech.jpg" alt="" width="140px" height="35px">
                                </a>
                            </div>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7934024737046!2d105.77768491476496!3d10.03390029282792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881f9a732075%3A0xfa43fbeb2b00ca73!2sCUSC%20-%20Cantho%20University%20Software%20Center!5e0!3m2!1svi!2s!4v1674741154911!5m2!1svi!2s" width="600" height="250px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="icon-return" id="backtop">
                    <i class='bx bxs-arrow-to-top'></i>
                </div>
            </footer>
        </div>
        <!-- this is sign in -->
        <div class="modal-sign-in  js-modal-sign-in">
            <div class="modal-sign-in-container js-modal-sign-in-container">
                <form action="" id="form-sign-in" class="modal-sign-form ">
                    <div class="modal-sign-in-form-icon js-modal-sign-in-icon-close">
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="modal-sign-form-header">
                        <h1 class="modal-sign-form-header-text-header">Sign In</h1>
                        <p class="modal-sign-form-header-text">Don't have an account yet?</p>
                        <!-- <button class="modal-sign-form-header-link  ">Sign Up</button> -->
                        <!-- <a href="/"  class="modal-sign-form-header-link js-sign-up">Sign Up</a> -->
                    </div>
                    <div class="modal-sign-form-body">
                        <label for="email" class="label-text">Email:</label><br>
                        <input type="mail" id="email" class="input-text" required>
                        <small></small>
                    </div>
                    <div class="modal-sign-form-body">
                        <label for="password-sign-in" class="label-text">Password:</label><br>
                        <input type="password" id="password-sign-in" class="input-text" required>
                        <small></small>
                    </div>
                    <input type="submit" value="Sign in" class="input-submit-btn js-sign-in" onclick="signIn();">
                    <input type="submit" value="Register" class="input-submit-btn js-sign-up">
                    <a href="" class="modal-sign-in-link-forget">forgot password</a>
                </form>
            </div>
        </div>
        <!-- this is sign up -->
        <div class="modal-sign-up js-modal-sign-up">
            <div class="modal-sign-up-container js-modal-sign-up-container">
                <form action="" class="modal-sign-up-form">
                    <div class="modal-sign-up-form-icon js-modal-sign-up-icon-close ">
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="modal-sign-up-form-header">
                        <h1 class="modal-sign-up-form-header-text-header">Sign Up</h1>
                    </div>
                    <div class="modal-sign-up-form-body">
                        <label for="first" class="label-text">First Name:</label><br>
                        <input type="text" placeholder="First Name" id="first" class="input-text" required>
                        <small></small>
                    </div>
                    <div class="modal-sign-up-form-body">
                        <label for="last" class="label-text">Last Name:</label><br>
                        <input type="text" placeholder="Last Name" id="last" class="input-text" required>
                        <small></small>
                    </div>
                    <div class="modal-sign-up-form-body">
                        <label for="mail" class="label-text">Email:</label><br>
                        <input type="mail" placeholder="Email" id="mail" class="input-text" required>
                        <small></small>
                    </div>
                    <div class="modal-sign-up-form-body">
                        <label for="password class="label-text">Password</label><br>
                        <input type="password" placeholder="Password" id="password" class="input-text" required>
                        <small></small>
                    </div>
                    <div class="modal-sign-up-form-body">
                        <label for="confirm" class="label-text">Confirm</label><br>
                        <input type="password" placeholder="Confirm" id="confirm" class="input-text" required>
                        <small></small>
                    </div>
                    <input type="submit" value="Sign Up" class="input-submit-btn" onclick="register();">
                </form>
            </div>
        </div>
        <!-- contact button -->
        <div class="contact-btn">
            <div class="contact-icon">
                <span class="icon-message-open js-icon-message-open"><i class='bx bx-message' ></i></span>
                <span class="icon-message-close js-icon-message-close hide"><i class='bx bx-message-x'></i></span>
            </div>
        </div>
        <!-- modal contact  -->
        <div class="modal-contact js-modal-contact">
            <div class="modal-contact-container">
                    <div class="modal-contact-container-icon-close js-contact-header-icon-close"><i class='bx bx-x'></i></div>
                    <div class="modal-contact-container-header"></div>
                    <div class="modal-contact-container-body"></div>
            </div>
        </div>
    </body>
    <script src="/homeOffice.js"></script>
    <script src="/js/app.js"></script>
   

        `
        document.getElementById("change").innerHTML = html;
    }

});
var subFilter = [];
function system(click){   
    if (true)
    {
        subFilter = mockData;

        var memoryFilter = subFilter.filter(function(product) {
            var categorys = document.getElementsByClassName("grid-item-sidebar-filter-content-item-dropdown-item-checkbox js-category-filter");
            for(i=0; i<categorys.length; i++) {
                if (categorys[i].checked)
                if (product.category==categorys[i].value) return true;
            }
        });
        if (memoryFilter.length>0) subFilter = memoryFilter;

          



        memoryFilter = subFilter.filter(function(product) {
            var colors = document.getElementsByClassName("grid-item-sidebar-filter-content-item-dropdown-item-checkbox js-color-filter");
            for(i=0; i<colors.length; i++) {
                if (colors[i].checked)
                if (product.color==colors[i].value){
                    return true;
                }else if(product.color1==colors[i].value){
                    return true;
                }else if(product.color2==colors[i].value){
                    return true;
                }else if(product.color3==colors[i].value){
                    return true;
                }else if(product.color4==colors[i].value){
                    return true;
                }
            } 
        });
        if (memoryFilter.length>0) subFilter = memoryFilter;

        memoryFilter = subFilter.filter(function(product) {
                var minPrice = document.getElementById("minPrice");
                if (product.price) if (product.price >= minPrice.value) return true;
            });
    
            if (memoryFilter.length>0) subFilter = memoryFilter;
    
            memoryFilter = subFilter.filter(function(product) {
                var maxPrice = document.getElementById("maxPrice");
                if (product.price) if (product.price <= maxPrice.value) return true;
            });
            if (memoryFilter.length>0) subFilter = memoryFilter;

       

        memoryFilter = subFilter.filter(function(product) {
            var brands = document.getElementsByClassName("grid-item-sidebar-filter-content-item-dropdown-item-checkbox js-brand-filter");
            for(i=0; i<brands.length; i++) {
                if (brands[i].checked)
                if (product.brand==brands[i].value) return true;
            }
        });
        if (memoryFilter.length>0) subFilter = memoryFilter;
    }
}
app.filter("filterFunction", function(){
    return function(items) {
        if (subFilter.length==0) return items;
        else return subFilter;

    }
});


// javascript
const rangeInput = document.querySelectorAll(".slider-input-range-wrapper input");
const priceInput = document.querySelectorAll(".js-input-price input");
const sliderRange = document.querySelector(".slider-range");

let priceGap = 100;

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 10000){
            if(e.target.className === "price-min"){
                rangeInput[0].value = minVal ;
                sliderRange.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }else{
                rangeInput[1].value = maxVal ;
                sliderRange.style.right =  100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
    
});




rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "slider-input-range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value  = minVal;
            priceInput[1].value  = maxVal;
            sliderRange.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            sliderRange.style.right =  100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
    
});
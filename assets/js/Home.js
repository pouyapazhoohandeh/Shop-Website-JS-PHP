"use strict";

function loadProduct()
{
    $.ajax({
        type : "get",
        url : "includes/api/products/GetProductList.php",
        async : "true",
        success : function(Result){
            let Products=JSON.parse(Result);
            for (let [index, element] of Products.entries()) {
                if(index==0)
                {
                    let child =`<div class="blog-slider__item swiper-slide slider swiper-slide-active" style="width: 800px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                    <div class="blog-slider__img">
                      <img src="../images/img2.webp" alt="">
                    </div>
                    <div class="blog-slider__content">
                      <span class="blog-slider__code">${element.Category}</span>
                      <div class="blog-slider__title">${element.Name}</div>
                      <div class="blog-slider__text">${element.Description}</div>
                      <a href="#" class="blog-slider__button">${element.Price}</a>
                    </div>
                  </div>'

`
                    $('.blog-slider__wrp').append(child);
                }
                else
                {
                    let child =`<div class="blog-slider__item swiper-slide  slider swiper-slide-next swiper-slide-prev" style="width: 800px; opacity: 0; transform: translate3d(-800px, 0px, 0px); transition-duration: 0ms;">
                    <div class="blog-slider__img">
                      <img src="../images/img2.webp" alt="">
                    </div>
                    <div class="blog-slider__content">
                      <span class="blog-slider__code">${element.Category}</span>
                      <div class="blog-slider__title">${element.Name}</div>
                      <div class="blog-slider__text">${element.Description}</div>
                      <a href="#" class="blog-slider__button">${element.Price}</a>
                    </div>
                  </div>`
                    $('.blog-slider__wrp').append(child);
                }


            }
        }
    });
}

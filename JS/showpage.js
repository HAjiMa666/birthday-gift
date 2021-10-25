const carouselPics = document.querySelectorAll(".carousel div[class^='pic']");
const carousel = document.querySelector(".carousel");
const bgBlur = document.querySelector(".bg-blur");
const leftArrow = document.querySelector(".left-arrow"),
    rightArrow = document.querySelector(".right-arrow");
const showPic = document.querySelector(".showPic"),
    bigPic = document.querySelector(".bigPic");

let carouselIndex = 5; // 判断轮播图的顺序
let carouselFlag = true; //节流阀 防止用户过快点击


console.log(bgBlur);

const picsUrls = [
    `https://codespirit-publicpicture.oss-cn-hangzhou.aliyuncs.com/img/carousel/dm18.jpg`,
    `https://codespirit-publicpicture.oss-cn-hangzhou.aliyuncs.com/img/carousel/hz2.jpg`,
    `https://codespirit-publicpicture.oss-cn-hangzhou.aliyuncs.com/img/carousel/hz24.jpg`,
    `https://codespirit-publicpicture.oss-cn-hangzhou.aliyuncs.com/img/carousel/hz32.jpg`,
    `https://codespirit-publicpicture.oss-cn-hangzhou.aliyuncs.com/img/carousel/hz33.jpg`,
    `https://codespirit-publicpicture.oss-cn-hangzhou.aliyuncs.com/img/carousel/ms9.jpg`,
]

picsUrls.forEach((url, index) => {
    carouselPics[index].style.backgroundImage = `url(${url})`;
})


carouselPics.forEach(item => {
    item.addEventListener("click", () => {
        stopCarousel()
        showPic.style.visibility = "visible"
        bigPic.style.backgroundImage = carouselPics[carouselIndex].style.backgroundImage;
    })
    item.addEventListener("animationend", () => {
        carouselFlag = true;
    })
});
showPic.addEventListener("click", () => {
    showPic.style.visibility = "hidden";
    startCarousel();
})
bigPic.addEventListener("click", (e) => {
    e.stopPropagation();
})


bgBlur.style.backgroundImage = carouselPics[carouselIndex].style.backgroundImage;
leftArrow.addEventListener("click", () => {
    if (carouselFlag) {
        stopCarousel();
        carouselFlag = false;
        carouselPics[carouselIndex].classList.remove("fadeIn"); // 这里的是为了将第一张图片渐入的效果去掉
        carouselPics[carouselIndex].classList.add("fadeOut");
        if (carouselIndex === 0) {
            carouselIndex = 5;
            // 为了达到无缝衔接 先将第一张图片渐入动画先显示出来
            carouselPics[carouselIndex].classList.add("fadeIn");
            // 显示出来后 在动画结束的时候 将之前消失的图片隐藏
            setTimeout(() => {
                carouselPics.forEach(item => {
                    item.classList.remove("fadeOut");
                })
            }, 1500)
        } else carouselIndex--;
        bgBlur.style.backgroundImage = carouselPics[carouselIndex].style.backgroundImage;
        startCarousel();
    }
})

rightArrow.addEventListener("click", () => {
    if (carouselFlag) {
        stopCarousel();
        carouselFlag = false;
        carouselPics.forEach(item => {
            item.classList.remove("fadeIn");
        })
        if (carouselIndex === 5) {
            // 首先将所有图片渐出
            carouselPics.forEach(item => {
                item.classList.add("fadeOut");
            })
            //同时将第一张图片的渐出移除,可以造成假象
            carouselPics[carouselIndex].classList.remove("fadeOut");
            // 过了一段时间 将第一张图片渐出 同时将最后一张图片渐入
            setTimeout(() => {
                carouselPics[carouselIndex].classList.add("fadeOut");
                carouselIndex = 0;
                carouselPics[carouselIndex].classList.remove("fadeOut");
                carouselPics[carouselIndex].classList.add("fadeIn");
                bgBlur.style.backgroundImage = carouselPics[carouselIndex].style.backgroundImage;
            }, 1000)
        } else {
            carouselPics[carouselIndex + 1].classList.remove("fadeOut");
            carouselPics[carouselIndex + 1].classList.add("fadeIn");
            carouselIndex++;
            bgBlur.style.backgroundImage = carouselPics[carouselIndex].style.backgroundImage;
        }
        startCarousel();
    }
})


// 自动轮播
let autoCarousel = setInterval(() => {
    rightArrow.click();
}, 5000)

let startCarousel = () => {
    autoCarousel = setInterval(() => {
        rightArrow.click();
    }, 5000);
}

let stopCarousel = () => {
    clearInterval(autoCarousel);
}








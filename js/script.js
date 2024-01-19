window.addEventListener("resize", function () {
  let windowWidth = window.innerWidth;
  const prizeA = document.querySelector(".prizeA");
  const prizeB = document.querySelector(".prizeB");
  const kvBlockSP = document.querySelector(".kvBlockSP");
  const bottlesImg = document.querySelector(".bottles .img");
  const earnPoints = document.querySelector(".earnPoints");
  const bg = document.querySelector(".bg");
  const date = document.querySelector(".date");
  bg.style.left = `${windowWidth / 1200})%`;
  prizeA.style.transform = `scale(${windowWidth / 1500})`;
  prizeB.style.transform = `scale(${windowWidth / 1500})`;
  earnPoints.style.transform = `scale(${windowWidth / 1200})`;
  date.style.transform = `scale(${windowWidth / 1200})`;
  // kvBlockSP.style.transform = `scale(${windowWidth / 1000})`;
  // bottlesImg.style.top = `scale(${windowWidth / 1500})`;
});

// burgerMenu
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".slide-menu").classList.toggle("active");
});
//header background
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const opacity = 1 - scrollPosition / 100;
  document.querySelector(".fruit1").style.opacity = opacity;
  document.querySelector(".fruit2").style.opacity = opacity;
  document.querySelector(".fruit3").style.opacity = opacity;
});

//footer background
var footerHeight = document.querySelector("footer").offsetHeight;

// 監聽滾動事件
window.addEventListener("scroll", function () {
  // 獲取滾動的垂直位置
  var scrollTop = window.scrollY;

  // 計算距離頁面底部的距離，並將其轉為負值
  var distanceFromFooter =
    (document.body.offsetHeight -
      window.innerHeight -
      scrollTop -
      footerHeight) *
    -1;

  // 根据距离计算透明度，这里使用 20 可以调整透明度的变化速度
  var opacity = Math.max(0, Math.min(1, distanceFromFooter / 150));

  // 選擇 .footer-bg 並設定樣式
  var footerBg = document.querySelector(".footer-bg");
  // 将透明度应用到元素上
  footerBg.style.opacity = opacity;
});

//lightBox
// 修改 pop 函数，接收按钮或其他标识符的引用作为参数
function pop(element) {
  // 获取按钮所在的 li 元素
  var liElement = element.closest("li");

  // 获取 li 元素下的 lightBox 元素
  var lightBox = liElement.querySelector("#lightBox");

  // 切换 lightBox 的显示状态
  lightBox.style.display = lightBox.style.display === "none" ? "block" : "none";
}

// JavaScript
// 使用 Slick Carousel 初始化輪播

$(".center").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 150,
      // breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});

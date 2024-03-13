// script.js
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.background-slider img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000); // 每隔3秒切换一次图片

  const jumpButton = document.getElementById('jumpButton');

  jumpButton.addEventListener('click', function() {
    // 点击按钮时弹出确认框
    const ready = confirm('准备好了吗？');
    
    // 如果点击了确认，则跳转到另一个网站
    if (ready) {
      window.location.href = 'https://m.masayaph.com';
    }
  });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
  const jumpButton = document.getElementById('jumpButton');

  jumpButton.addEventListener('click', function() {
    // 点击按钮时弹出确认框
    const ready = confirm('Are you ready?');
    
    // 如果点击了确认，则跳转到另一个网站
    if (ready) {
      window.location.href = 'https://m.masayaph.com';
    }
  });
});

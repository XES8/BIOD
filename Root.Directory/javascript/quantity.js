// JavaScript 代码
document.addEventListener('DOMContentLoaded', function () {
    // DOM 加载后执行
    generateStars(25); // 生成10个星星，根据需要调整数量

    function generateStars(numStars) {
        var starsContainer = document.querySelector('.stars');
        for (var i = 0; i < numStars; i++) {
            var star = document.createElement('div');
            star.className = 'star';
            // 设置随机位置和动画延迟
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 5 + 's'; // 随机延迟
            starsContainer.appendChild(star);
        }
    }
});

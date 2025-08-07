const header = document.querySelector('.header');
const logo1 = document.querySelector('.logo1');
const logo2 = document.querySelector('.logo2');
const textHeader = document.querySelector('.textHeader');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 100) {
        header.style.background = '#ffffffe6';
        header.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.1)';
        logo1.style.display = 'none';
        logo2.style.display = 'block';
        textHeader.style.color = '#222222';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = '';
        logo1.style.display = 'block';
        logo2.style.display = 'none';
        textHeader.style.color = '#fff';
    }
});

const dateAfter = new Date(2018, 10, 21, 20, 0, 0);
const dateBefore = new Date(
    dateAfter.getFullYear(),
    dateAfter.getMonth(),
    dateAfter.getDate() - 25,
    dateAfter.getHours() - 13,
    dateAfter.getMinutes(),
    dateAfter.getSeconds()
);
let diff = dateAfter - dateBefore;
const countdown = document.getElementById('countdown');
const pad = (value) => value.toString().padStart(2, '0');
setInterval(() => {
    let totalSecond = Math.floor(diff / 1000);
    const days = Math.floor(totalSecond / 86400);
    const hours = Math.floor((totalSecond % 86400) / 3600);
    const minutes = Math.floor((totalSecond % 3600) / 60);
    const seconds = Math.floor(totalSecond % 60);
    countdown.innerHTML = `<div>
                                            <span>${pad(days)}</span>
                                            <div class="text-xs text-gray-500">DAYS</div>
                                        </div>
                                        <div>
                                            <span>${pad(hours)}</span>
                                            <div class="text-xs text-gray-500">HOURS</div>
                                        </div>
                                        <div>
                                            <span>${pad(minutes)}</span>
                                            <div class="text-xs text-gray-500">MINUTES</div>
                                        </div>
                                        <div>
                                            <span>${pad(seconds)}</span>
                                            <div class="text-xs text-gray-500">SECONDS</div>
                                        </div>`;
    diff -= 1000;
}, 1000);

// SLICK

$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });
});

const button = document.querySelector('#play-video');
const videoContainer = document.querySelector('#video-container');

button.addEventListener('click', () => {
    videoContainer.innerHTML = `
    <div class="relative">
    <iframe width="853" height="480" src="https://www.youtube.com/embed/3Njxv_D3MEQ?si=w8auIxrUcwi5LKF2" class="w-full sm:w-[760px] sm:h-[480px] lg:w-[850px] lg:h-[480px] sm:aspect-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <button id="close-video" class="absolute top-[-20px] right-[-20px] text-white text-2xl">
    <i class="fa-solid fa-xmark"></i>
    </button>
    </div>
    `;
    videoContainer.classList.remove('hidden');
    videoContainer.classList.add('flex');
    const closeVideo = document.querySelector('#close-video');
    closeVideo.addEventListener('click', () => {
        videoContainer.classList.remove('flex');
        videoContainer.classList.add('hidden');
        videoContainer.innerHTML = '';
    });
});

const scroll = document.getElementById('scroll');
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 300) {
        scroll.classList.remove('hidden');
        scroll.classList.add('fixed');
    } else {
        scroll.classList.remove('fixed');
        scroll.classList.add('hidden');
    }
});

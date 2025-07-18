// 모든 article 요소들을 변수에 저장
const items = document.querySelectorAll('article'),
    aside = document.querySelector('aside'),
    asideCloseBtn = document.querySelector('button'),
    iframe = document.querySelector('#ytPlayer');

// article 순서에 맞는 유튜브 영상 ID 배열 (실제 영상 ID로 교체)
const youtubeIDs = [
    "beUdK82nAuU", // 01: 국토종주
    "cUwBO8fS48I", // 02: 삼척-강릉
    "6nq4lbXGi0w", // 03: 대진-양양
    "2jUoDxyO0rk"  // 04: 천호 벚꽃
];

// article 하나씩 반복
items.forEach((item, index) => {

    // 마우스 올리면 미리보기 video 재생
    item.addEventListener('mouseenter', e => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    });

    // 마우스 벗어나면 video 일시 정지
    item.addEventListener('mouseleave', e => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    });

    // 클릭하면 aside에 유튜브 영상과 텍스트 표시 및 위치 이동
    item.addEventListener('click', e => {
        const video = e.currentTarget.querySelector('video');
        video.pause();

        const el = e.currentTarget;

        const num = el.querySelector('h2').innerText;
        const title = el.querySelector('h3').innerText;
        const text = el.querySelector('p').innerText;

        const videoID = youtubeIDs[index];
        const youtubeURL = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=0&loop=1&playlist=${videoID}`;

        // 텍스트 내용 삽입
        aside.querySelector('h2').innerText = num;
        aside.querySelector('h3').innerText = title;
        aside.querySelector('p').innerText = text;

        // iframe에 유튜브 영상 연결
        iframe.setAttribute('src', youtubeURL);


        if (window.matchMedia('(max-width: 1024px)').matches) {
            const articleTop = el.offsetTop;
            aside.style.top = articleTop + 'px';
            aside.style.display = 'block';
        }

        // aside 열기
        aside.classList.add('on');

<<<<<<< HEAD
        // 모든 article 흐리게
        items.forEach(article => {
            article.style.opacity = '0.1';
        });




    });

=======
>>>>>>> b987d3dd874c224eef8ec109e4b58a96ff621ac4
    // 닫기 버튼 클릭 시 aside 닫고 iframe 영상 정지
    asideCloseBtn.addEventListener('click', () => {
        aside.classList.remove('on');

        if (window.matchMedia('(max-width: 1024px)').matches) {
            aside.style.display = 'none';
        }
        iframe.setAttribute('src', ''); // 유튜브 정지

        // 모든 article 원래대로 복원
        items.forEach(article => {
            article.style.opacity = '1';
        });

    });

});

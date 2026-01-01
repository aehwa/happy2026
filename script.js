// 랜덤하게 선택하는 함수
// texts와 images는 data.js에서 로드됩니다
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 페이지 로드 시 랜덤하게 표시
function displayRandomContent() {
    const randomText = getRandomItem(texts);
    const randomImage = getRandomItem(images);
    
    document.getElementById('randomText').textContent = randomText;
    
    const imgElement = document.getElementById('randomImage');
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
        imgElement.src = randomImage;
        imgElement.onload = () => {
            imgElement.style.opacity = '1';
        };
        imgElement.onerror = () => {
            imgElement.style.opacity = '1';
            console.warn(`이미지를 불러올 수 없습니다: ${randomImage}`);
        };
    }, 150);
}

// 다시 보기 버튼 클릭 이벤트
document.getElementById('refreshBtn').addEventListener('click', displayRandomContent);

// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', displayRandomContent);


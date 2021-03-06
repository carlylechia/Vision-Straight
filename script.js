const menu = document.querySelector('#menu');
const mobileNav = document.querySelector('.mobile-nav');
const menulist = document.querySelectorAll('#nav li a');

function toggleMenu() {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block';
    menu.src = 'images/close-icon.png';
  } else {
    mobileNav.style.display = 'none';
    menu.src = 'images/menu-icon.png';
  }
}

menu.addEventListener('click', toggleMenu);

function hideMenu() {
  mobileNav.style.display = 'none';
  menu.src = 'images/menu-icon.png';
}

menulist.forEach((list) => {
  list.addEventListener('click', hideMenu);
});

const vsbJudges = [
  {
    judgeImg: 'images/CEO.jpg',
    alt: 'CEO',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Chia (CEO) Carlyle',
    judgeTitle: 'Founder and CEO, VSR',
    judgeDesc: 'The brains behind the show. Musical genius. He is also an award-winning artist with decades of experience under his belt.',
  },
  {
    judgeImg: 'images/Double-T.jpeg',
    alt: 'Double-T',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Ankinimbom (Double-T) Karl',
    judgeTitle: 'Founder of VSB, COO of VSR',
    judgeDesc: 'Talented and award-winning artist and a boss in the new school music brand. Lyrical royalty. Has tons of experience as well.',
  },
  {
    class: 'hide hideable',
    judgeImg: 'images/T-Mario.jpeg',
    alt: 'T-Mario',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Finjap (T-Mario) Darcy',
    judgeTitle: 'Co-founder of VSB',
    judgeDesc: 'The media and tech lieson of Vision Straight inc.',
  },
  {
    class: 'hide hideable',
    judgeImg: 'images/Tripp.jpeg',
    alt: 'Tripp',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Kisuh (Tripp) Karlson',
    judgeTitle: 'Co-founder and Secretary General, VSB',
    judgeDesc: 'Takes charge of business; assists in diploamtic decision-making; Is also the main hype guy of VSB.',
  },
  {
    class: 'hide hideable',
    judgeImg: 'images/Drico.jpeg',
    alt: 'Drico',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Ngong (Drico) Cedric',
    judgeTitle: 'Co-founder and President, VSB',
    judgeDesc: 'The president of VSB. Makes the diplomatic decisions.',
  },
  {
    class: 'hide hideable',
    judgeImg: 'images/Belto.jpeg',
    alt: 'Belto',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Ngong (Belto) Beltus',
    judgeTitle: 'Co-founder, VSB, CTO, VSR',
    judgeDesc: 'Experienced dancer and choreographer.',
  },
];

const judgesSection = document.querySelector('.vsb-judges');
function loadSection() {
  judgesSection.innerHTML = '';
  for (let i = 0; i < vsbJudges.length; i += 1) {
    judgesSection.innerHTML = `${judgesSection.innerHTML}
    <div class="judge ${vsbJudges[i].class}">
          <div class="judgeLeft">
            <img class="j-image" src="${vsbJudges[i].judgeImg}" alt="${vsbJudges[i].alt}">
            <img class="bg" src="${vsbJudges[i].chessBoard}" alt="">
          </div>
          <div class="judgeRight">
            <h2>${vsbJudges[i].judgeName}</h2>
            <h3>${vsbJudges[i].judgeTitle}</h3>
            <p>${vsbJudges[i].judgeDesc}</p>
          </div>
        </div>`;
  }
}

function togglecontent() {
  const hideContent = document.querySelectorAll('.hideable');
  hideContent.forEach((item) => item.classList.toggle('hide'));
}

const moreContent = document.querySelector('#more-btn');
moreContent.addEventListener('click', togglecontent);

window.addEventListener('load', () => {
  loadSection();
});
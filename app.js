let openOrClose1 = true;
let clickCount1 = 0;

const ques1 = document.querySelector('.question1');
const image1 = document.querySelector('.plusMinusImg1');
const ans1 = document.querySelector('.answer1');

const fillTheAnswer1 = function () {
  if (openOrClose1) {
    image1.src = '/assets/images/icon-minus.svg';
    ans1.innerHTML =
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    ans1.style.marginTop = '20px';
    openOrClose1 = false;
    hideTheAnswer2();
    hideTheAnswer3();
    hideTheAnswer4();
  }
};

const hideTheAnswer1 = function () {
  if (!openOrClose1) {
    image1.src = '/assets/images/icon-plus.svg';
    ans1.innerHTML = '';
    ans1.style.marginTop = '0';
    openOrClose1 = true;
    clickCount1 = 0;
  }
};

ques1.addEventListener('click', () => {
  clickCount1++;
  clickCount1 % 2 === 0 ? hideTheAnswer1() : fillTheAnswer1();
});

//2

let openOrClose2 = true;
let clickCount2 = 0;

const ques2 = document.querySelector('.question2');
const image2 = document.querySelector('.plusMinusImg2');
const ans2 = document.querySelector('.answer2');

const fillTheAnswer2 = function () {
  if (openOrClose2) {
    image2.src = '/assets/images/icon-minus.svg';
    ans2.innerHTML =
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.';
    ans2.style.marginTop = '20px';
    openOrClose2 = false;
    hideTheAnswer1();
    hideTheAnswer3();
    hideTheAnswer4();
  }
};

const hideTheAnswer2 = function () {
  if (!openOrClose2) {
    image2.src = '/assets/images/icon-plus.svg';
    ans2.innerHTML = '';
    ans2.style.marginTop = '0';
    openOrClose2 = true;
    clickCount2 = 0;
  }
};

ques2.addEventListener('click', () => {
  clickCount2++;
  clickCount2 % 2 === 0 ? hideTheAnswer2() : fillTheAnswer2();
});

//3

let openOrClose3 = true;
let clickCount3 = 0;

const ques3 = document.querySelector('.question3');
const image3 = document.querySelector('.plusMinusImg3');
const ans3 = document.querySelector('.answer3');

const fillTheAnswer3 = function () {
  if (openOrClose3) {
    image3.src = '/assets/images/icon-minus.svg';
    ans3.innerHTML =
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
    ans3.style.marginTop = '20px';
    openOrClose3 = false;
    hideTheAnswer1();
    hideTheAnswer2();
    hideTheAnswer4();
  }
};

const hideTheAnswer3 = function () {
  if (!openOrClose3) {
    image3.src = '/assets/images/icon-plus.svg';
    ans3.innerHTML = '';
    ans3.style.marginTop = '0';
    openOrClose3 = true;
    clickCount3 = 0;
  }
};

ques3.addEventListener('click', () => {
  clickCount3++;
  clickCount3 % 2 === 0 ? hideTheAnswer3() : fillTheAnswer3();
});

//4

let openOrClose4 = true;
let clickCount4 = 0;

const ques4 = document.querySelector('.question4');
const image4 = document.querySelector('.plusMinusImg4');
const ans4 = document.querySelector('.answer4');

const fillTheAnswer4 = function () {
  if (openOrClose4) {
    image4.src = '/assets/images/icon-minus.svg';
    ans4.innerHTML =
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
    ans4.style.marginTop = '20px';
    openOrClose4 = false;
    hideTheAnswer1();
    hideTheAnswer2();
    hideTheAnswer3();
  }
};

const hideTheAnswer4 = function () {
  if (!openOrClose4) {
    image4.src = '/assets/images/icon-plus.svg';
    ans4.innerHTML = '';
    ans4.style.marginTop = '0';
    openOrClose4 = true;
    clickCount4 = 0;
  }
};

ques4.addEventListener('click', () => {
  clickCount4++;
  clickCount4 % 2 === 0 ? hideTheAnswer4() : fillTheAnswer4();
});

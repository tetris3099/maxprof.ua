// PRICES
const cardBox = document.querySelector('.price-repair');

const cardRadio = {
 radioOne: document.getElementById('card-radio-one'),
 radioTwo: document.getElementById('card-radio-two'),
 radioThree: document.getElementById('card-radio-three'),
 radioFour: document.getElementById('card-radio-four'),
};

// DISCOUNT
const discountBox = document.querySelector('.discount-carousel');

const discountRadio = {
  radioOne: document.getElementById('discount-one'),
  radioTwo: document.getElementById('discount-two'),
  radioThree: document.getElementById('discount-three'),
}

// video
 const videoBox = document.getElementById('respons-list');

 const videoRadio = {
  radioOne: document.getElementById('video-radio-one'),
  radioTwo: document.getElementById('video-radio-two'),
  radioThree: document.getElementById('video-radio-three'),
  radioFour: document.getElementById('video-radio-four'),
 }

 //  our-time
const mastersBox = document.getElementById('masters-box');

const masters = {
  masterOne: document.getElementById('master-one'),
  masterTwo: document.getElementById('master-two'),
  masterThree: document.getElementById('master-three'),
  masterFour: document.getElementById('master-four'),
  masterFive: document.getElementById('master-five'),
  masterSix: document.getElementById('master-six'),
  masterSeven: document.getElementById('master-seven'),
  masterEight: document.getElementById('master-eight'),
};

const mastersRadio = {
  radioOne: document.getElementById('master-one-radio'),
  radioTwo: document.getElementById('master-two-radio'),
  radioThree: document.getElementById('master-three-radio'),
  radioFour: document.getElementById('master-four-radio'),
  radioFive: document.getElementById('master-five-radio'),
  radioSix: document.getElementById('master-six-radio'),
  radioSeven: document.getElementById('master-seven-radio'),
  radioEight: document.getElementById('master-eight-radio'),
};

// Function
const clickScroll = (element, cardConteiner, x) => {
  const BoxWidth = cardConteiner.scrollWidth - cardConteiner.clientWidth;
  const res = (x * BoxWidth) / 100;

  element.addEventListener('click', function name() {
  cardConteiner.scrollTo(res, 0)})
};

// discountRadio.radioTwo.addEventListener('click', () => {
//   const BoxWidth = discountBox.scrollWidth - discountBox.clientWidth;
//   const procent = (50 * BoxWidth) / 100;
//   discountBox.scrollTo(procent, 0);
// });

clickScroll(cardRadio.radioOne, cardBox, 0);
clickScroll(cardRadio.radioTwo, cardBox, 36);
clickScroll(cardRadio.radioThree, cardBox, 71);
clickScroll(cardRadio.radioFour, cardBox, 100);

clickScroll(discountRadio.radioOne, discountBox, 0);
clickScroll(discountRadio.radioTwo, discountBox, 50);
clickScroll(discountRadio.radioThree, discountBox, 100);

clickScroll(videoRadio.radioOne, videoBox, 0);
clickScroll(videoRadio.radioTwo, videoBox, 33.3);
clickScroll(videoRadio.radioThree, videoBox, 66.6);
clickScroll(videoRadio.radioFour, videoBox, 100);

clickScroll(mastersRadio.radioOne, mastersBox, 0);
clickScroll(mastersRadio.radioTwo, mastersBox, 14.286);
clickScroll(mastersRadio.radioThree, mastersBox, 28.571);
clickScroll(mastersRadio.radioFour, mastersBox, 42.857);
clickScroll(mastersRadio.radioFive, mastersBox, 57.123);
clickScroll(mastersRadio.radioSix, mastersBox, 71.429);
clickScroll(mastersRadio.radioSeven, mastersBox, 85.714);
clickScroll(mastersRadio.radioEight, mastersBox, 100);

const radioIconManagement = ({cartConteiner, object, numbers} =settingObject) => {
  cartConteiner.addEventListener('scroll', iconShow);

  function iconShow () {
    const BoxScrolled = Number(cartConteiner.scrollLeft.toFixed(0));
    const BoxWidth = cartConteiner.scrollWidth - cartConteiner.clientWidth;
    const res = Number(((BoxScrolled / BoxWidth) * 100).toFixed(0));

    const destruct = () => {
      if (numbers.length === 4) { 
        threeRadio();
      } else if (numbers.length === 5) {
        fourRadio();
      }
    };

    destruct();

    function threeRadio ({radioOne, radioTwo, radioThree} = object) {
      if(res > numbers[0] && res < numbers[1]) {
        radioOne.classList.add('check');
        radioTwo.classList.remove('check');
        radioThree.classList.remove('check');
      } else if(res > numbers[1] && res < numbers[2]) {
        radioTwo.classList.add('check');
        radioOne.classList.remove('check');
        radioThree.classList.remove('check');
      } else if(res > numbers[2] && res < numbers[3]) {
        radioThree.classList.add('check');
        radioOne.classList.remove('check');
        radioTwo.classList.remove('check');
      }
    };

    function fourRadio ({radioOne, radioTwo, radioThree, radioFour} = object)  {
      if(res > numbers[0] && res < numbers[1]) {
        radioOne.classList.add('check');
        radioTwo.classList.remove('check');
        radioThree.classList.remove('check');
        radioFour.classList.remove('check');
      } else if(res > numbers[1] && res < numbers[2]) {
        radioTwo.classList.add('check');
        radioFour.classList.remove('check');
        radioThree.classList.remove('check');
        radioOne.classList.remove('check');
      } else  if(res > numbers[2] && res < numbers[3]) {
        radioThree.classList.add('check');
        radioOne.classList.remove('check');
        radioTwo.classList.remove('check');
        radioFour.classList.remove('check');
      }  else if(res > numbers[3] && res < numbers[4]) {
        radioFour.classList.add('check');
        radioThree.classList.remove('check');
        radioTwo.classList.remove('check');
        radioOne.classList.remove('check');
      }
    };
  };
};

const cartPatterOne = {
  cartConteiner: discountBox,
  object: discountRadio,
  numbers: [0, 26, 75, 100],
}

const cartPatterTwo = {
  cartConteiner: cardBox,
  object: cardRadio,
  numbers: [0, 12, 50, 85, 100],
};

const cartPatterThree = {
  cartConteiner: videoBox,
  object: videoRadio,
  numbers: [0, 12, 50, 85, 100],
};

radioIconManagement(cartPatterTwo);
radioIconManagement(cartPatterOne);
radioIconManagement(cartPatterThree);

// OUR-TIME-FUNCTIONS
const masterNext = document.querySelector('.master-next');
const masterPrev = document.querySelector('.master-prev');

masterNext.addEventListener('click', () => {
  masterNext.style = 'display: none;';
  mastersBox.scrollBy(Number(mastersBox.clientWidth + 5), 0);
  setTimeout(st, 600)
  function st () {
    masterNext.style = 'display: block;';
  }
});

masterPrev.addEventListener('click', () => {
  masterPrev.style.display = 'none';
  mastersBox.scrollBy(Number(-(mastersBox.clientWidth + 5)), 0);
  setTimeout(st, 600);
  function st () {
    masterPrev.style.display = 'block';
  }
});

function radioMastersIcon () {
  mastersBox.addEventListener('scroll', () => {
    const scrollMasters = Number(mastersBox.scrollLeft.toFixed(0));
    const widthMasters = mastersBox.scrollWidth - mastersBox.clientWidth;
    const procent = Number(((scrollMasters / widthMasters) * 100).toFixed(3));
  
    const radioBut = Object.keys(mastersRadio);
  
    for (const i of radioBut) {
      mastersRadio[i].classList.remove('check');
    }
  
    if (procent >= 0 && procent <= 14) {
      mastersRadio.radioOne.classList.add('check');
    } else if (procent >= 14.286 && procent <= 28) {
      mastersRadio.radioTwo.classList.add('check')
    } else if (procent >= 28.01 && procent <= 42) {
      mastersRadio.radioThree.classList.add('check')
    } else if (procent >= 42.01 && procent <= 57) {
      mastersRadio.radioFour.classList.add('check')
    } else if (procent >= 57.01 && procent <= 71) {
      mastersRadio.radioFive.classList.add('check')
    } else if (procent >= 71.01 && procent <= 85) {
      mastersRadio.radioSix.classList.add('check')
    } else if (procent >= 85.01 && procent <= 99) {
      mastersRadio.radioSeven.classList.add('check')
    } else if (procent === 100) {
      mastersRadio.radioEight.classList.add('check')
    }
  })
};

radioMastersIcon();

function scrollRadio () {
  mastersBox.addEventListener('scroll', () => {
    const scrollMasters = Number(mastersBox.scrollLeft.toFixed(0));
    const widthMasters = mastersBox.scrollWidth - mastersBox.clientWidth;
    const procent = Number(((scrollMasters / widthMasters) * 100).toFixed(3));

    if (procent > 57) {
      document.getElementById('our-team__radio-box').scrollTo(100, 0);
    } else {
      document.getElementById('our-team__radio-box').scrollTo(0, 0);
    }
  })
};

scrollRadio();


// TO TOP
const toTopButt = document.querySelector('.to-top');

const hide = () => {
  if (window.scrollY > 1000) {
    toTopButt.classList.remove('is-hidden')
  } else if (window.scrollY < 1000) {
    toTopButt.classList.add('is-hidden')
  }
};

window.addEventListener('scroll', hide);

toTopButt.addEventListener('click', function name() {
  window.scrollTo(0, 0)
});


const menu = {
  menuBut: document.querySelector('.mobile-menu'),
  blackBox: document.querySelector('.black-box'),
  closed: document.querySelector('.close-menu'),
  open () {
    this.menuBut.addEventListener('click', () => {
      this.blackBox.classList.remove('is-hidden')
      document.body.classList.add('open')
    })
  },
  close () {
    this.closed.addEventListener('click', () => {
      this.blackBox.classList.add('is-hidden')
      document.body.classList.remove('open')
    })

    this.blackBox.addEventListener('click', () => {
      this.blackBox.classList.add('is-hidden')
      document.body.classList.remove('open')
    })
  },
};

menu.open();
menu.close();

const navigationButt = document.querySelectorAll('.link-mod');

let scrollNumber = 0;
const widthDisplay = document.documentElement.clientWidth;
const heightDisplay = document.documentElement.clientHeight;

navigationButt.forEach((butt) => {
  butt.addEventListener('click', () => {
    
    if (butt === navigationButt[0]) {
      scrollNumber = document.querySelector('.prices').getBoundingClientRect().top + pageYOffset;
    } else if (butt === navigationButt[1]) {
      scrollNumber = document.querySelector('.work-process').getBoundingClientRect().top + pageYOffset;
    } else if (butt === navigationButt[2]) {
      scrollNumber = document.querySelector('.portfolio').getBoundingClientRect().top + pageYOffset;
    } else if (butt === navigationButt[3]) {
      scrollNumber = document.querySelector('.discount').getBoundingClientRect().top + pageYOffset;
    } else if (butt === navigationButt[4]) {
      scrollNumber = document.querySelector('.advantages').getBoundingClientRect().top + pageYOffset;
    } else if (butt === navigationButt[5]) {
      scrollNumber = document.querySelector('.respons').getBoundingClientRect().top + pageYOffset;
    } else if (butt === navigationButt[6]) {
      document.querySelector('.black-box-contacts').classList.toggle('is-hidden');
      document.body.classList.toggle('open');
      return;
    }

    if (widthDisplay < 768) {
      scrollNumber -= 66;
    }
    window.scrollTo(0, scrollNumber);
    return scrollNumber;
  })
});

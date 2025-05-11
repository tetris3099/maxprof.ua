// DROP-DOWN
const uList = document.querySelector('.price-repair');
const item = uList.querySelectorAll('.items');
const openClose = uList.querySelectorAll('.list-but');
const dropdown = document.querySelectorAll('.dropdown');
const arrow = uList.querySelectorAll('.list-but .icon');
const iconFlashing = uList.querySelectorAll('svg.flashing');
const flashing = uList.querySelectorAll('span.flashing');

openClose.forEach((butt) => {
  butt.addEventListener('click', () => {
    const hiddenBox =butt.previousElementSibling;
    const parent = (butt.parentNode).parentNode;
    const arrowUp = butt.querySelector('.icon');
    const itBlinksIcon = parent.querySelector('svg.flashing');
    const itBlinks = parent.querySelector('span.flashing');
    if (hiddenBox.style.maxHeight) {
      dropdown.forEach((box) => box.style.maxHeight = null);
      item.forEach((item) => item.style.height = 593 + 'px');
      uList.style.height = 638 + 'px';
      arrow.forEach((icon) => icon.style = 'transform: rotate(0deg);');
      iconFlashing.forEach((icon) => icon.classList.remove('icons'));
      flashing.forEach((el) => el.style.color = '#c4c4c4');
      item[0].querySelector('.card_box_mod').style.marginBottom = 30 + 'px';
    } else {
      dropdown.forEach((box) => box.style.maxHeight = null);
      item.forEach((item) => item.style.height = 593 + 'px');
      uList.style.height = 638 + 'px';
      arrow.forEach((icon) => icon.style = 'transform: rotate(0deg);');
      iconFlashing.forEach((icon) => icon.classList.remove('icons'));
      flashing.forEach((el) => el.style.color = '#c4c4c4');
      item[0].querySelector('.card_box_mod').style.marginBottom = 30 + 'px';

      hiddenBox.style = `max-height:${hiddenBox.scrollHeight}px; opacity: 1;`;
      parent.style.height = 'auto';
      uList.style.height = 638 + hiddenBox.scrollHeight + 'px';
      arrowUp.style = 'transform: rotate(180deg);';
      itBlinks.style = 'color: var(--text-color);';
      if (parent === item[0]) {
        item[0].querySelector('.card_box_mod').style.marginBottom = 9 + 'px';
      } else if (parent === item[1] || parent === item[2] || parent === item[3]) {
        itBlinksIcon.classList.add('icons');
      }
    }
  })
});

const butCard = document.querySelectorAll('.repair-but');

butCard.forEach((butt) => {
  butt.addEventListener('click', () => {
    if (butt === butCard[0]) {
      butCard[0].textContent = '90 999 грн';
    } else if (butt === butCard[1]) {
      butCard[1].textContent = '150 000 грн';
    } else if (butt === butCard[2]) {
      butCard[2].textContent = '185 000 грн';
    } else if (butt === butCard[3]) {
      butCard[3].textContent = '237 000 грн';
    }
  })
});
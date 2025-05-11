const accordion = document.querySelectorAll('.accordion');

// accordion[0].style = 'background-color: red;';
// accordion[2].style.backgroundColor = 'blue';
// const contentAll = document.querySelectorAll('.accordion__content');
// console.log(contentAll);

accordion.forEach(function (el) {
  el.addEventListener('click', () => {
    const content = el.nextElementSibling;
    const parent = el.parentNode;
    const iconContent = el.querySelector('.icon__accordion');
    if (content.style.maxHeight) {
      document.querySelectorAll('.accordion__content').forEach((cont) => cont.style.maxHeight = null);
      document.querySelectorAll('.answers__list .item').forEach((parents) => parents.style = 'background-color: transparent; box-shadow: none;padding-dottom: 0px;');
      document.querySelectorAll('.icon__accordion').forEach((icon) => {
        icon.textContent = '+';
        icon.style.color = '#ccc';
      });
      accordion.forEach((a) => a.style.color = '#171616');
    } else {
      document.querySelectorAll('.accordion__content').forEach((cont) => cont.style.maxHeight = null);
      document.querySelectorAll('.answers__list .item').forEach((parents) => parents.style = 'background-color: transparent; box-shadow: none;padding-botton: 0;');
      document.querySelectorAll('.icon__accordion').forEach((icon) => {
        icon.textContent = '+';
        icon.style.color = '#ccc';
      });
      accordion.forEach((a) => a.style.color = '#171616');
      content.style.maxHeight = content.scrollHeight + 'px';
      parent.style = 'background-color: #f2f2f2; box-shadow: 0 0 10px 0 rgba(215, 215, 215, 0.25); padding-bottom: 17px;';
      iconContent.textContent = '-';
      iconContent.style.color = '#6cac3d';
      el.style.color = '#6cac3d'
    }
  })
});
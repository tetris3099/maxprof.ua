const slider = document.querySelector('input[data-slider]');

function colorSlider () {
  document.getElementById('i').innerText = this.value;
// меняет цвет полосы
  const a = slider.value / 1.5;
  const color = `linear-gradient(to right, #2D4872 ${a}%,#d1d1d1 ${a}%)`;
  slider.style.background = color;
}

slider.addEventListener('input', colorSlider);


// метод работает только с мышкой
// slider.addEventListener('mousemove', function name () {
//   const a = slider.value / 1.5;
//   const color = `linear-gradient(to right, #2D4872 ${a}%,#d1d1d1 ${a}%)`;
//   slider.style.background = color;
// });

const modalForm = document.forms.modalForm;

modalForm.addEventListener('submit', async (event) => { 
  event.preventDefault();

  const gropInput = modalForm.getElementsByTagName('fieldset');
  const gropValue = [
    modalForm.typeRepair.value,
    modalForm.realEstate.value,
    modalForm.numberOfRooms.value,
    modalForm.slider.value
  ];

  function errorInput (i) {
    i.classList.add('_err');
    setTimeout(() => {i.classList.remove('_err');}, 1500);
  }

  let numError = 0;

  for (let i = 0; i < gropValue.length; i++) {
    if (gropValue[i] === '') {
      numError += 1;
      errorInput(gropInput[i]);
    }

    if (gropValue[i] === '0') {
      numError += 1;
      errorInput(gropInput[i]);
    }
  }

  if (modalForm.tel.value === '') {
    numError += 1;
    modalForm.querySelector('.calc-tel').style.border = '1px solid rgb(107, 0, 0)';
    setTimeout(() => {modalForm.querySelector('.calc-tel').style.border = '1px solid #ccc';}, 1500);
  }

  const formData = new FormData(modalForm);

  if (numError === 0) {
    document.querySelector('.form_submit_text').textContent = 'Відправка данних';
    document.querySelector('.modal-calc').classList.add('_submit');

    let respons = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if (Response.ok) {
      document.querySelector('.form_submit_text').textContent = "Протягом дня наш менеджер зв'яжиться з вами";
      setTimeout(() => {
        document.querySelector('.modal-calc').classList.remove('_submit');
      }, 3000);
    modalForm.reset();
    } else {
      document.querySelector('.form_submit_text').textContent = "Помилка";
      setTimeout(() => {
        document.querySelector('.modal-calc').classList.remove('_submit');
      }, 3000);
    }
  }
});


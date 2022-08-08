//процент у ползунка
var rangeValue = function(){
  document.querySelector('.user__range-percent').innerHTML = document.querySelector('.user__range-input').value+'%';
}
document.querySelector('.user__range-input').addEventListener("input", rangeValue);

//закрытие бургера 
document.addEventListener("click", function (e) {
    if(e.target.className != 'burger__box' && e.target.className != 'burger__toggle' && e.target.className != 'span'){
       e.stopPropagation();
       document.querySelector('#burger__toggle').checked = false;
    }
});

//тип системы
const typeSystem = document.querySelector('.user__type-system');
const typeSystem_title = typeSystem.querySelector('.type-system__title');
const typeSystem_labels = typeSystem.querySelectorAll('.user__type-system label');

typeSystem_title.addEventListener('click', () => {
  'active' === typeSystem.getAttribute('data-state') ? typeSystem.setAttribute('data-state', ''):typeSystem.setAttribute('data-state', 'active');  
});

document.onclick = function (e) {
  if (e.target.className != "type-system__title") {
    typeSystem.setAttribute('data-state', '');
  };
};

for (let i = 0; i < typeSystem_labels.length; i++) {
  typeSystem_labels[i].addEventListener('click', (e) => {
    typeSystem_title.textContent = e.target.textContent;
    typeSystem.setAttribute('data-state', '');
  });
}
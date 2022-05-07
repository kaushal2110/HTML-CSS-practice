document.querySelector('.main p').style.display = 'none';
document.querySelector('.main').classList.add('spinner2');


setTimeout(()=> {
  document.querySelector('.main').classList.remove('spinner2');
  document.querySelector('.main p').style.display = 'block';
}, 4000);

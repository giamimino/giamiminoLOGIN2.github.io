const loginpopup = document.querySelector('.btnLogin-popup')
const wrapper = document.querySelector('.wrapper')
const close = document.querySelector('.icon-close')


loginpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active');
}); 

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
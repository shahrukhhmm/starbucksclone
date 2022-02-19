const sideNav = document.querySelector(`.side-nav`);
const navopen = document.querySelector(`.fa-bars`);
const navclose = document.querySelector(`.fa-times`);
const menuopen = document.querySelector(`.menu-btnopen`);
const menuclose = document.querySelector(`.menu-btnclose`);
const sidebar= document.querySelector('.sidebar');
const menubar= document.querySelector('.menuinternal');
const bottom1 = document.querySelector('.bottom-1')
const btn1 = document.querySelector('.btn-1')
const bottom2 = document.querySelector('.bottom-2')
const btn2 = document.querySelector('.btn-2')
const bottom3 = document.querySelector('.bottom-3')
const btn3 = document.querySelector('.btn-3')
const bottom4 = document.querySelector('.bottom-4')
const btn4 = document.querySelector('.btn-4')
const bottom5 = document.querySelector('.bottom-5')
const btn5 = document.querySelector('.btn-5')

const sideNavBackground = document.getElementById(`side-nav-cover`);

navopen.addEventListener(`click`, () => {
    sideNav.classList.add(`toggle`);
    sideNavBackground.classList.add(`toggle`);
    document.body.classList.add(`hide-overflow`);
    navopen.style.display='none';
    navclose.style.display='block';
});

navclose.addEventListener(`click`, () => {
    sideNav.classList.remove(`toggle`);
    sideNavBackground.classList.remove(`toggle`);
    document.body.classList.remove(`hide-overflow`);
    navclose.style.display='none';
    navopen.style.display='block';
    
});
sideNavBackground.addEventListener(`click`, () => {
    sideNavBackground.classList.remove(`toggle`);
    sideNav.classList.remove(`toggle`);
    document.body.classList.remove(`hide-overflow`);
    navopen.style.display='block';
    navclose.style.display='none';
})

menuopen.addEventListener('click',() => {
    sidebar.style.display='none';
    menubar.style.display='block';
})

menuclose.addEventListener('click',() => {
    menubar.style.display='none';
   sidebar.style.display='block';
})

btn1.addEventListener('click', () =>
{
    bottom1.style.display=bottom1.style.display==='block'?'':'block';
    btn1.classList.toggle('btnrotate')
})

btn2.addEventListener('click', () =>
{
    bottom2.style.display=bottom2.style.display==='block'?'':'block';
    btn2.classList.toggle('btnrotate')
})

btn3.addEventListener('click', () =>
{
    bottom3.style.display=bottom3.style.display==='block'?'':'block';
    btn3.classList.toggle('btnrotate')
})

btn4.addEventListener('click', () =>
{
    bottom4.style.display=bottom4.style.display==='block'?'':'block';
    btn4.classList.toggle('btnrotate')
})

btn5.addEventListener('click', () =>
{
    bottom5.style.display=bottom5.style.display==='block'?'':'block';
    btn5.classList.toggle('btnrotate')
})


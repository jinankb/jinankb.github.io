const navToggle = document.getElementById('nav-collapse');
const navList =  document.getElementById('nav-list');
const windowWidth = window.innerWidth;
console.log(windowWidth);
if( windowWidth <= 480){
    navList.style.display = "none";
}
navToggle.addEventListener('click', () => {
    if( navList.style.display == "none"){
    navList.style.display = "block";
    navToggle.textContent = "X";
    } else {
        navList.style.display = "none";
        navToggle.textContent = "☰";

    }
});

const innerNavToggle = document.getElementById('inner-nav-collapse');
const innerNavList = document.querySelector('.inner-nav-links');
innerNavToggle.addEventListener('click', ()=>{
    innerNavList.classList.toggle('hidemb');
    if(innerNavToggle.textContent == "▼"){
        innerNavToggle.textContent = "X";
    } else {
        innerNavToggle.textContent = "▼";
    }
});
/* Tabs */
const tabHead = document.querySelectorAll('.tab-head h3');
tabHead.forEach((thead) =>{
    thead.addEventListener('click', (e) =>{
        tabHead.forEach((th)=>{
            th.classList.remove('active');
        });
        thead.classList.add('active');
        let theadId = thead.dataset.id;
        tabPara = document.querySelectorAll('.tabpara');
        tabPara.forEach((tabPara) =>{
            if(tabPara.dataset.id == theadId){
                tabPara.style.display = 'block';
            }
            else {
                tabPara.style.display = 'none';
            }
        });

    });
    
});
/* Accordion */
const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
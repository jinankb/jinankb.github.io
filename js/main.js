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
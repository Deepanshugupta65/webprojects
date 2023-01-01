const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');
const items = document.querySelector('.items');
const main_items  = document.querySelectorAll('nav .items li');
openmenu.addEventListener('click',show);
 closemenu.addEventListener('click',close);

 main_items.foreach(items=> {
    items.addEventListener('click',function(){
        close();
    })
 })

function show(){
    items.style.display='flex';
    items.style.top='0';
}

function close(){
   items.style.top = '-100%';
}
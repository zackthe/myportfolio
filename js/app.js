
/** hambuger menu **/

let hamberger_menu = document.getElementById('humberger-menu');
let navigation = document.querySelector('.navigation-menu-list');
    

hamberger_menu.addEventListener('click',(e)=>{
        
navigation.classList.toggle('show');
hamberger_menu.classList.toggle('open');    
    
    })

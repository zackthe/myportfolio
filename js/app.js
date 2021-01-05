
/** hambuger menu **/

let hamberger_menu = document.getElementById('humberger-menu');
let navigation = document.querySelector('.navigation-menu-list');
    

hamberger_menu.addEventListener('click',(e)=>{
        
navigation.classList.toggle('show');
hamberger_menu.classList.toggle('open');    
    
    })


/**** copy email to clipboard ****/

let copybutton = document.querySelector('.footer-btn');
let copytext = document.querySelector('.alert-msg');


function copyToClipboard() {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', 'contact@belkasmizakariae.com');
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);}



copybutton.addEventListener('click',()=>{
        copyToClipboard();
        copytext.classList.add('alert-msg-show');
     setTimeout(function(){
        
            copytext.classList.remove(`alert-msg-show`);

    },2000);
})



function displayAlert(text,action){
     Alert.childNodes[1].textContent= text;

    Alert.classList.add(`alert-${action}`);
    
    setTimeout(function(){
        
             Alert.childNodes[1].textContent= '';

            Alert.classList.remove(`alert-${action}`);

    },1200);
}


 

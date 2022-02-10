// Подключение функционала "ЧФ"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = function() {
    document.addEventListener("click", documentAction);

    function documentAction(elem){
        console.log('1');
        const targetObj = elem.target;
        if (window.innerWidth > 768 && isMobile.any()) {
            console.log('2');
            console.log(elem);
                document.querySelector('.menu__sub-list').classList.toggle('_activ_sub-list');
            
            
        }
    }

}
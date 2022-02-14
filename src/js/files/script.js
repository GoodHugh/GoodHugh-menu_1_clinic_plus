// Подключение функционала "ЧФ"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = function () {
    document.addEventListener("click", documentAction);

    function documentAction(elem) {
        const targetObjMenu = elem.target;
        const targetObjSeaech = elem.target;
        if (window.innerWidth > 300 && isMobile.any()) {
            if (targetObjMenu.classList.contains('menu__list-item-button')) {
                const parentObjMenu = targetObjMenu.parentElement;
                parentObjMenu.querySelector('.menu__sub-list').classList.toggle('_menu_sub-list_active');
                parentObjMenu.querySelector('.menu__list-icon').classList.toggle('_menu_list-icon_actice');
            }
            if (!targetObjMenu.classList.contains('menu__list-item-button') && document.querySelectorAll('._menu_sub-list_active').length > 0) {
                document.querySelectorAll('._menu_sub-list_active').forEach((elem)=>{
                    elem.classList.remove('_menu_sub-list_active');
                })
                document.querySelectorAll('._menu_list-icon_actice').forEach((elem)=>{
                    elem.classList.remove('_menu_list-icon_actice');
                })
            }
            if (targetObjSeaech.classList.contains('header__top-content-search-box')) {
                document.querySelector('.header__top-content-search-input').classList.toggle('header_top-content-search-input_activ');
            }
            if (!targetObjSeaech.classList.contains('header__top-content-search-box')){
                document.querySelector('.header__top-content-search-input').classList.remove('header_top-content-search-input_activ');
            }
        }
    }
}
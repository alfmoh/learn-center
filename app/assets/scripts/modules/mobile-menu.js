import $ from "jquery";

class MobileMenu {
    constructor() {
        this.siteNav = $(".site-nav");
        this.menuIcon = $(".site-nav__menu-icon");
        this.category = $(".site-nav-item-left__cat");
        this.teachLearn = $(".site-nav-item-right");

        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu(){
        this.siteNav.toggleClass("site-nav-visible");
        this.category.toggleClass("site-nav-item-left__cat-visible");
        this.teachLearn.toggleClass("site-nav-item-right-visible");
        this.menuIcon.toggleClass("site-nav__menu-icon--close-x");
    }
}

export default MobileMenu;
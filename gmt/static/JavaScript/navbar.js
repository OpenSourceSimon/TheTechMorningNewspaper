const button = document.querySelector('#hamburger-menu');
const menu = document.querySelector('#navigation-items');

button.addEventListener('click', () => {
menu.classList.toggle('hidden');
});

const subscribe = document.querySelector('#subscribe');
const heroSection = document.querySelector('#hero-section');

document.addEventListener('DOMContentLoaded', () => {
    const navbarItem = document.getElementById(document.title);
    // if the page is active, add the red border to the navbar item
    if (navbarItem) {
        navbarItem.classList.add('md:border-t-gmt-red-primary', 'md:border-b-0');
        navbarItem.classList.remove('md:border-t-gmt-background');
    }
    else {
        const navigationItems = document.getElementById('navbar-item-list');
        for (let i = 0; i < navigationItems.children.length; i++) {
            navigationItems.children[i].children[0].classList.add('md:border-t-gmt-red-primary', 'md:border-b-0');
            navigationItems.children[i].children[0].classList.remove('md:border-t-gmt-background');
        }
    }
})

const toggleDropdown = () => {
    const dropdown = document.getElementById('dropdownAvatar');
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('block');
    dropdown.classList.toggle()
}
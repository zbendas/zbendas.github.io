$(document).ready(() => {
    let $toggleButton = $('.hamburger-button'),
        $buttonBars = $toggleButton.find('.hamburger-bar'),
        $menuContent = $('.menu-content'),
        $mainContent = $('.grid-container');
    $toggleButton.on('click', () => {
        $buttonBars.toggleClass('close-button');
        $menuContent.toggleClass('menu-show');
    });
    $mainContent.on('click', () => {
       if ($menuContent.hasClass('menu-show')){
           $buttonBars.toggleClass('close-button');
           $menuContent.toggleClass('menu-show');
       }
    });
});
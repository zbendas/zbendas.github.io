$(document).ready(() => {
    let $toggleButton = $('.hamburger-button'),
        $buttonBars = $toggleButton.find('.hamburger-bar'),
        $menuContent = $('.menu-content');
    $toggleButton.on('click', () => {
        $buttonBars.toggleClass('close-button');
        $menuContent.toggleClass('menu-show');
    });
});

var v = new Popover({
    button: document.getElementById('callme-popover'),
    position: 'right',
    template: '<div class="popover"> ' +
    '<div class="popover-arrow"></div> ' +
    '<div class="popover-content" >It allows customers to simply enter their phone number and wait for the phone to ring instead of manually dialing the telephone number, entering access code and audio PIN.</div> ' +
    '</div>',
    align: 'left'
});

var timer;

document.getElementById('callme-popover').addEventListener('click', function (event) {
    if (!document.getElementsByClassName('popover').length) {
        v.render();
        timer = setTimeout( function () {
            if (document.getElementsByClassName('popover').length) {
                v.remove();
            }
        }, 10000);
    } else {
        v.remove();
        clearTimeout(timer);
    }
    event.stopPropagation();
});

document.body.addEventListener('click', function () {
    if (document.getElementsByClassName('popover').length) {
        v.remove();
        clearTimeout(timer);
    }
});
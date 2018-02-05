window.onload = function() {
    let elements = document.getElementsByClassName('get'),
        input = document.getElementById('hidden-input'),
        selectInput = document.getElementById('select-input'),
        dropdown = document.getElementById('dropdown'),
        back = document.getElementsByClassName('back ')[0];

    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function() {
            let a = this.getAttribute('data-value');
            let b = dropdown.options[dropdown.selectedIndex].value;
            selectInput.value = b;
            input.value = a;
            console.log(b);
        }
    }
    back.href = "javascript: history.go(-1)";
    (function() {
        var create = document.createElement('script');
        var createAgain = document.createElement('script');
        create.type = 'text/javascript';
        create.async = true;
        create.src = '../../js/online-call.js';

        createAgain.type = 'text/javascript';
        createAgain.async = true;
        createAgain.src = '../../js/online-chat.js';
        var onlineCall = document.getElementsByTagName('script')[2],
            onlineChat = document.getElementsByTagName('script')[2];
        onlineCall.parentNode.insertBefore(create, onlineCall);
        onlineChat.parentNode.insertBefore(createAgain, onlineChat);
    })();
};
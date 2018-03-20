window.onload = function() {
    var elements = document.getElementsByClassName('buy-btn'),
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
};
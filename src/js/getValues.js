let elements = document.getElementsByClassName('get'),
    input = document.getElementById('hidden-input'),
    selectInput = document.getElementById('select-input'),
    dropdown = document.getElementById('dropdown');

for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function() {
        let a = this.getAttribute('data-value');
        let b = dropdown.options[dropdown.selectedIndex].value;
        selectInput.value = b;
        input.value = a;
        console.log(b);
    }
}
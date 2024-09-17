const btn = document.querySelector('#btn');
const sec = document.querySelector('#seccao');

btn.addEventListener('click', function() {

    if (sec.style.display = 'block') {
        sec.style.display = 'none';
    } else if (sec.style.display = 'none') {
        sec.style.display = 'block';
    }
})
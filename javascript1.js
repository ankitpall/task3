document.querySelectorAll('.input-box input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focus');
        }
    });
});

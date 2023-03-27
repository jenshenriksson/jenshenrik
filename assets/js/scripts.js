document.addEventListener('DOMContentLoaded', function () {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const abstractElement = button.closest('.paper').querySelector('.abstract');
            abstractElement.style.display = abstractElement.style.display === 'none' ? 'block' : 'none';
            button.textContent = button.textContent === 'Expand' ? 'Collapse' : 'Expand';
        });
    });
});

// UC9:-Set Event Listener on salary Range to display appropriate value
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () 
{
    output.textContent = salary.value;
});
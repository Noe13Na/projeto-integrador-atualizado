document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const novidadeInputs = document.getElementsByName('novidades');
    const novidadeError = document.getElementById('novidadeError');
    const form = document.getElementById('newsletterForm');
  
    nameInput.addEventListener('blur', function() {
      if (nameInput.value.length < 3) {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        nameError.textContent = 'O nome deve ter no mínimo 3 caracteres.';
      } else {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        nameError.textContent = '';
      }
    });

    
  
    form.addEventListener('submit', function(event) {
      let novidadeChecked = false;
  
      for (const input of novidadeInputs) {
        if (input.checked) {
          novidadeChecked = true;
          break;
        }
      }
  
      if (!novidadeChecked) {
        novidadeError.textContent = 'Por favor, selecione uma opção.';
        event.preventDefault();
      } else {
        novidadeError.textContent = '';
      }
    });
  });
  
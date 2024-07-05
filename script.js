document.getElementById('actualizarBoton').addEventListener('click', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    var tableBody = document.getElementById('user-table-body');

    // Mostrar loader
    loader.classList.remove('d-none');

    // Realizar la solicitud AJAX
    fetch('https://reqres.in/api/users?delay=3')
      .then(response => response.json())
      .then(data => {
        // Limpiar contenido actual de la tabla
        tableBody.innerHTML = '';

        // Iterar sobre los usuarios y agregar filas a la tabla
        data.data.forEach(user => {
          var row = `
            <tr>
              <td>${user.id}</td>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td>${user.email}</td>
              <td><img src="${user.avatar}" alt="Avatar de ${user.first_name}" class="avatar-img"></td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });

        // Ocultar loader y mostrar contenido
        loader.classList.add('d-none');
        content.classList.remove('d-none');
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
        // En caso de error, manejarlo aquí (mostrar un mensaje de error, etc.)
      });
  });
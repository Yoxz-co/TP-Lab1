document.getElementById('medal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const country = document.getElementById('country').value;
    const gold = document.getElementById('gold').value;
    const silver = document.getElementById('silver').value;
    const bronze = document.getElementById('bronze').value;
    
    const tableBody = document.querySelector('#medal-table tbody');
    
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${country}</td>
        <td>${gold}</td>
        <td>${silver}</td>
        <td>${bronze}</td>
    `;
    
    tableBody.appendChild(row);
    
    // Limpiar el formulario
    document.getElementById('medal-form').reset();
});

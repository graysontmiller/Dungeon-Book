async function newFormHandler(event) {
    event.preventDefault();
  
    const party_name = document.querySelector('input[name="party-name"]').value;
    const party_pass = document.querySelector('input[name="party-pass"]').value;
  
    const response = await fetch(`/api/parties`, {
      method: 'POST',
      body: JSON.stringify({
        party_name,
        party_pass
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.create-party').addEventListener('submit', newFormHandler);
  
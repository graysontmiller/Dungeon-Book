async function newFormHandler(event) {
    event.preventDefault();
  
    const party_pass = document.querySelector('input[name="party-pass-join"]').value;
  
    const response = await fetch(`/api/parties`, {
      method: 'PUT',
      body: JSON.stringify({
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
  
  document.querySelector('.join-party').addEventListener('submit', newFormHandler);
  
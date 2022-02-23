async function newFormHandlerCharacter(event) {
    event.preventDefault();
  
    const full_name = document.querySelector('input[name="full-name"]').value;
    const race = document.querySelector('input[name="race"]').value;
    const mainclass = document.querySelector('input[name="mainclass"]').value;
    const alignment = document.querySelector('input[name="race"]').value;
  
    const response = await fetch(`/api/characters`, {
      method: 'POST',
      body: JSON.stringify({
        full_name,
        race,
        mainclass,
        alignment
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
  
  document.querySelector('.create-character').addEventListenerCharacter('submit', newFormHandler);

  //fix this in the morning.
  
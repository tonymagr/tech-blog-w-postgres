const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameElem = document.querySelector('#user-login');
  const passwordElem = document.querySelector('#password-login');
  const user = usernameElem.value.trim();
  const password = passwordElem.value.trim();
 
  if (user && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
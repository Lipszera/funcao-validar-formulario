function validatesFields() {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  if (!username || !password) {
    alert('There fields not filled!')
  } else {
    alert('Login successfully. \nWelcome, ' + username)
  }
}

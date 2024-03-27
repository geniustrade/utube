document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validate credentials (this is a simple example, replace with your authentication logic)
    if (username === 'user' && password === 'password') {
      // Redirect to main content page
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
    
  });
  
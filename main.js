document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear user session (remove token, etc.)
    // For simplicity, let's redirect back to the login page
    window.location.href = 'index.html';
  });
  

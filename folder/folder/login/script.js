function showPage(type) {
    hideAllForms();
    if (type === 'creator') {
      document.getElementById('creator-login').style.display = 'block';
    } else if (type === 'backer') {
      document.getElementById('backer-login').style.display = 'block';
    }
  }
  
  function showSignupPage(type) {
    hideAllForms();
    if (type === 'creator') {
      document.getElementById('creator-signup').style.display = 'block';
    } else if (type === 'backer') {
      document.getElementById('backer-signup').style.display = 'block';
    }
  }
  
  function hideAllForms() {
    document.getElementById('creator-login').style.display = 'none';
    document.getElementById('backer-login').style.display = 'none';
    document.getElementById('creator-signup').style.display = 'none';
    document.getElementById('backer-signup').style.display = 'none';
  }
  // Password match validation and bot integration

document.getElementById('backer-signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
  
    alert("Sign up successful!");
    // Implement further form submission logic here
  });
  
  // Bot button logic
  document.getElementById('backer-bot-btn').addEventListener('click', function() {
    alert("Hello! How can I assist you today?");
    // Implement chat bot logic here
  });
  // Password match validation and bot integration

document.getElementById('backer-signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
  
    alert("Sign up successful!");
    // Implement further form submission logic here
  });
  
  // Bot button logic
  document.getElementById('backer-bot-btn').addEventListener('click', function() {
    alert("Hello! How can I assist you today?");
    // Implement chat bot logic here
  });
document.addEventListener('DOMContentLoaded', () => {
    const signupPage = document.getElementById('signupPage');
    const loginPage = document.getElementById('loginPage');
    const homePage = document.getElementById('homePage');
    const charityPage = document.getElementById('charityPage');
    const loggedInUser = document.getElementById('loggedInUser');
    const charityButton = document.getElementById('charityButton');
    const donateButton = document.getElementById('donateButton');
    
    let currentUser = null;
    
    // Function to show a specific page
    function showPage(page) {
      signupPage.style.display = 'none';
      loginPage.style.display = 'none';
      homePage.style.display = 'none';
      charityPage.style.display = 'none';
    
      page.style.display = 'block';
    }
    
    // Event listener for sign up form submission
    document.getElementById('signupForm').addEventListener('submit', (e) => {
      e.preventDefault();
      // Implement user registration and handling here
      // For simplicity, let's assume registration is successful:
      currentUser = document.getElementById('username').value;
      loggedInUser.textContent = currentUser;
      showPage(homePage);
    });
    
    // Event listener for login form submission
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      // Implement user login and handling here
      // For simplicity, let's assume login is successful:
      currentUser = document.getElementById('loginUsername').value;
      loggedInUser.textContent = currentUser;
      showPage(homePage);
    });
    
    // Event listener for "View Charities" button click
    charityButton.addEventListener('click', () => {
      showPage(charityPage);
    });
    
    // Event listener for "Donate" button click
    donateButton.addEventListener('click', () => {
      const donationAmount = parseFloat(document.getElementById('donationAmount').value);
      // Implement donation processing here
      // For simplicity, let's assume donation is successful:
      alert(`Thank you for donating $${donationAmount.toFixed(2)}!`);
    });
    
    // Show the sign-up page by default
    showPage(signupPage);
  });
  
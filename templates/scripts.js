document.addEventListener('DOMContentLoaded', () => {
    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simulate backend check
            if (username === 'admin' && password === '1234') {
                window.location.href = 'dashboard.html';
            } else {
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.textContent = 'Invalid username or password.';
            }
        });
    }

    // Handle Signup Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.textContent = 'Passwords do not match!';
            } else {
                alert('Signup successful!');
                window.location.href = 'login.html';
            }
        });
    }

    // Handle Reset Password Form Submission
    const resetForm = document.getElementById('resetForm');
    if (resetForm) {
        resetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            alert(`Password reset instructions sent to ${email}`);
        });
    }

    // Handle Add Order Form Submission
    const addOrderForm = document.getElementById('addOrderForm');
    if (addOrderForm) {
        addOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Order added successfully!');
            window.close();
        });
    }

   // Function to handle form submission in the "Manage Orders" page
document.addEventListener('DOMContentLoaded', () => {
    const manageOrdersForm = document.getElementById('manageOrdersForm');
    if (manageOrdersForm) {
        manageOrdersForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Changes saved successfully!');
        });
    }
});


    // Handle Search Form Submission
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchValue = document.getElementById('searchField').value;
            alert(`Searching for: ${searchValue}`);
        });
    }
});

// Open Popup for Add/Edit Order
function openPopup(url) {
    window.open(url, 'popupWindow', 'width=600,height=400,scrollbars=yes');
}


function openSearchPopup() {
    window.open('search-popup.html', 'SearchPopup', 'width=600,height=400,scrollbars=yes');
}


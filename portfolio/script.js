function view() {
    alert("Please sign up first to view the portfolio.");
    const userResponse = confirm("Would you like to sign up now?");
    if (userResponse) {
        window.location.href = "login.php"; 
    } else {
        alert("You can sign up anytime to access the portfolio.");
    }
}

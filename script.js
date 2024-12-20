document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let feedback = document.getElementById("feedback").value;
    
    if(feedback.trim() !== "") {
        alert("Thank you for your feedback!");
        document.getElementById("feedback").value = ""; // Clear the feedback text area
    } else {
        alert("Please enter your feedback before submitting.");
    }
});

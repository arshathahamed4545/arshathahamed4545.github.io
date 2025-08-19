document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   
  
    // Get values from the form
    const username = document.getElementById('username').value;
    const feedback = document.getElementById('feedback').value;
  
    // Create a feedback object
    const feedbackData = {
      username: username,
      feedback: feedback,
      date: new Date().toLocaleString() // Add timestamp
    };
  
    // Get feedback data from localStorage, or create an empty array if none exist
    let allFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];
  
    // Add the new feedback to the feedback array
    allFeedback.push(feedbackData);
  
    // Save the updated feedback array to localStorage
    localStorage.setItem('feedbackData', JSON.stringify(allFeedback));
  
    // Show success message
    document.getElementById('successMessage').textContent = 'Feedback submitted successfully!';
    document.getElementById('successMessage').style.display = 'block';
  
    // Clear the form
    document.getElementById('feedbackForm').reset();
  
  });
  
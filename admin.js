// Get the feedback data from localStorage
let allFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];

// Get the feedback table body and "No Feedback" message
const feedbackList = document.getElementById('feedbackList');
const noFeedbackMessage = document.getElementById('noFeedback');

// Function to update the table display
function updateFeedbackTable() {
  // Clear the current feedback list
  feedbackList.innerHTML = '';

  // Check if feedback exists
  if (allFeedback.length > 0) {
    // Loop through the feedback and display them in the table
    allFeedback.forEach((feedback, index) => {
      const row = document.createElement('tr');
      
      // Create table cells for username, feedback, date, and action (delete button)
      row.innerHTML = `
        <td>${feedback.username}</td>
        <td>${feedback.feedback}</td>
        <td>${feedback.date}</td>
        <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
      `;
      feedbackList.appendChild(row);
    });

    // Hide the "No feedback" message
    noFeedbackMessage.style.display = 'none';
  } else {
    // Show "No feedback" message
    noFeedbackMessage.style.display = 'block';
  }
}

// Event listener for delete buttons
feedbackList.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('deleteBtn')) {
    // Get the index of the feedback to be deleted
    const feedbackIndex = event.target.getAttribute('data-index');
    
    // Remove feedback from the array
    allFeedback.splice(feedbackIndex, 1);

    // Save the updated feedback array to localStorage
    localStorage.setItem('feedbackData', JSON.stringify(allFeedback));

    // Update the table display
    updateFeedbackTable();
  }
});

// Call updateFeedbackTable to load and display feedback on page load
updateFeedbackTable();

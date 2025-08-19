// Get feedback data from localStorage
let feedbackData = JSON.parse(localStorage.getItem('feedbackData'));

// Function to populate the feedback table
function populateFeedbackTable() {
    const tableBody = document.querySelector('#feedbackTable tbody');
    tableBody.innerHTML = '';  // Clear the table body before populating

    if (feedbackData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">No feedback available</td></tr>';
        return;
    }

    feedbackData.forEach((feedback, index) => {
        const row = document.createElement('tr');
        
        // Create table cells for each feedback property
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${feedback.name}</td>
            <td>${feedback.email}</td>
            <td>${feedback.message}</td>
            <td>${new Date(feedback.timestamp).toLocaleString()}</td>
            <td><button class="delete-btn" onclick="deleteFeedback(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to delete feedback
function deleteFeedback(index) {
    // Remove the feedback from the data array
    feedbackData.splice(index, 1);

    // Update the localStorage with the updated feedback data
    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

    // Re-populate the table
    populateFeedbackTable();
}

// Initial population of the feedback table
populateFeedbackTable();

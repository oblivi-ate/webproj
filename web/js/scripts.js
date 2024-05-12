// Function to submit comment
function submitComment() {
    // Get user input
    var nameInput = document.getElementById('name').value;
    var commentInput = document.getElementById('comment').value;

    // Create new comment element
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = '<p><strong>' + nameInput + '</strong> said:</p><p>' + commentInput + '</p><span>Just Now</span>';

    // Append comment to comments section
    var commentsSection = document.getElementById('comments');
    commentsSection.appendChild(commentElement);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}

// Event listener for comment submission
document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    submitComment(); // Call submitComment function
});

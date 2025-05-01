let activityRepository; // Declare activityRepository in the global scope

function handleDeleteActivity(event) {
    const deleteButton = event.target;
    const activityCard = deleteButton.closest('.activity-card');

    if (activityCard) {
        const activityIdToDelete = parseInt(activityCard.dataset.activityId);

        // Call the Repository's deleteActivity method using the globally available instance
        if (activityRepository) {
            activityRepository.deleteActivity(activityIdToDelete);
            renderActivities(activityRepository, '.activities-container');
        } else {
            console.error("activityRepository is not initialized.");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize activityRepository within the DOMContentLoaded listener
    activityRepository = new Repository(); // Removed 'const' here

    activityRepository.createActivity("Hiking in the Mountains", "Enjoying breathtaking views and fresh air.", "images/hiking.png");
    activityRepository.createActivity("Reading a Good Book", "Relaxing with a captivating story.", "images/book.png");
    activityRepository.createActivity("Playing Guitar", "Expressing myself through music.", "images/guitar.png");

    renderActivities(activityRepository, '.activities-container');

    const addActivityButton = document.getElementById('add-activity-btn');
    if (addActivityButton) {
        addActivityButton.addEventListener('click', handleAddActivity);
    } else {
        console.error("Add Activity button not found.");
    }

    function handleAddActivity() {
        const titleInput = document.getElementById('activity-title');
        const descriptionInput = document.getElementById('activity-description');
        const imgUrlInput = document.getElementById('activity-image-url');
        const activitiesContainerSelector = '.activities-container'; // Define the container selector here

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const imgUrl = imgUrlInput.value.trim();

        if (!title || !description || !imgUrl) {
            alert('Please fill in all the activity details (Title, Description, and Image URL).');
            return;
        }

        activityRepository.createActivity(title, description, imgUrl);

        renderActivities(activityRepository, activitiesContainerSelector);

        titleInput.value = '';
        descriptionInput.value = '';
        imgUrlInput.value = '';
    }
});

function renderActivities(repositoryInstance, containerSelector) {
    const activitiesContainer = document.querySelector(containerSelector);
    if (activitiesContainer) {
        activitiesContainer.innerHTML = '';
        const allActivities = repositoryInstance.getAllActivities();
        const activityCards = allActivities.map(activity => createActivityCard(activity));
        activityCards.forEach(card => activitiesContainer.appendChild(card));
    } else {
        console.error(`Container with selector "${containerSelector}" not found.`);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const activityRepository = new Repository();

    activityRepository.createActivity("Hiking in the Mountains", "Enjoying breathtaking views and fresh air.", "images/hiking.jpg");
    activityRepository.createActivity("Reading a Good Book", "Relaxing with a captivating story.", "images/reading.jpg");
    activityRepository.createActivity("Playing Guitar", "Expressing myself through music.", "images/guitar.jpg");

    renderActivities(activityRepository, '.activities-container');

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
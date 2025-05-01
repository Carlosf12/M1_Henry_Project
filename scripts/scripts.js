class Repository{
    constructor() {
        this.activities = [];
        this.nextId = 1;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(this.nextId, title, description, imgUrl);
        this.activities.push(newActivity);
        this.nextId++;
        return newActivity;
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

function createActivityCard(activity) {
    const {id, title, description, imgUrl} = activity;

    const card = document.createElement('div');
    const titleElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    const imageElement = document.createElement('img');

    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    imageElement.src = imgUrl;
    imageElement.alt = title;

    card.classList.add('activity-card');
    titleElement.classList.add('activity-title');
    descriptionElement.classList.add('activity-description');
    imageElement.classList.add('activity-image');

    card.appendChild(titleElement);
    card.appendChild(imageElement);
    card.appendChild(descriptionElement);

    return card;
}
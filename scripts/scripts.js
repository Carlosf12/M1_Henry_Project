class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
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
    const { id, title, description, imgUrl } = activity;

    const card = document.createElement('div');
    card.classList.add('activity-card');
    card.dataset.activityId = id; 

    const titleElement = document.createElement('h3');
    titleElement.classList.add('activity-title');
    titleElement.innerHTML = title;

    const imageElement = document.createElement('img');
    imageElement.classList.add('activity-image');
    imageElement.src = imgUrl;
    imageElement.alt = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('activity-description');
    descriptionElement.innerHTML = description;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-activity-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', handleDeleteActivity); 

    card.appendChild(titleElement);
    card.appendChild(imageElement);
    card.appendChild(descriptionElement);
    card.appendChild(deleteButton); 

    return card;
}
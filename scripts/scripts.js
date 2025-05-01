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
        this.activities = this.activities.filter(this.activities.filter(activity => activity.id !== id));
    }
}
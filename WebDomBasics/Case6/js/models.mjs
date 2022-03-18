export let tasks = [
    {
        description: "Comprar pan",
        completed: true
    },
    {
        description: "Compar chorizos",
        completed: false
    },
];

export function getTasks () {
    return tasks;
}

export function setTasks (newTasks) {
    tasks = newTasks;
}
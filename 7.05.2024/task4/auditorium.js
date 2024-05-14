let auditoriums = [
    {
        name: `2A`,
        seats: 17,
        faculty: `Язык сценариев JavaScript`
    },
    {
        name: `2B`,
        seats: 18,
        faculty: `Основы Информационных технологий`
    },
    {
        name: `3A`,
        seats: 14,
        faculty: `Сетевое программирование`
    },
]

function printAuditoriums() {
    auditoriums.forEach(r => {
        alert(`Аудитория: ${r.name} - ${r.seats} мест - Факультитет: ${r.faculty}`);
    })
}

function printAuditoriumsByFaculty(faculty) {
    let filteredAuditoriums = auditoriums.filter(f => f.faculty === faculty);
    if (filteredAuditoriums.length > 0) {
        filteredAuditoriums.forEach(f => {
            alert(`Аудитория: ${f.name} - ${f.seats} мест - ${f.faculty}`);
        });
    }
    else {
        alert(`Нет такого факультета`);
    }
}

function printAuditoriumsForGroup(group) {
    let suitableAuditoriums = auditoriums.filter(f => f.faculty === group.faculty && f.seats >= group.students);
    if (suitableAuditoriums.length > 0) {
        suitableAuditoriums.forEach(s => {
            alert(`Аудитория: ${s.name} - ${s.seats} мест - ${s.faculty}`);
        })
    }
    else {
        alert(`Нет подходящих аудиторий для группы ${group.name}`)
    }

}
let group = {
    name: "FBMS_3_22_8_RU",
    students: 12,
    faculty: "JS"
}
function sortAuditoriumsBySeats() {
    let sortedAuditoriums = auditoriums.slice().sort((a, b) => a.seats - b.seats);
    sortedAuditoriums.forEach(s => {
        alert(`Аудитория: ${s.name} - ${s.seats} мест - ${s.faculty}`);
    });
}

function sortAuditoriumsByNames() {
    let sortedAuditoriums = auditoriums.slice().sort((a, b) => a.name.localeCompare(b.name));
    sortedAuditoriums.forEach(f => {
        alert(`Аудитория: ${f.name} - ${f.seats} мест - ${f.faculty}`);
    });
}

let printAuditoriumsButton = document.getElementById("printAuditoriums");
let printAuditoriumsByFacultyButton = document.getElementById("printAuditoriumsByFaculty");
let printAuditoriumsForGroupButton = document.getElementById("printAuditoriumsForGroup");
let sortAuditoriumsBySeatsButton = document.getElementById("sortAuditoriumsBySeats");
let sortAuditoriumsByNamesButton = document.getElementById("sortAuditoriumsByNames");

printAuditoriumsButton.addEventListener("click", function () {
    printAuditoriums();
});
printAuditoriumsByFacultyButton.addEventListener("click", function () {
    let faculty = prompt(`Введите название факультета: `);
    printAuditoriumsByFaculty(faculty);
});
printAuditoriumsForGroupButton.addEventListener("click", function () {
    printAuditoriumsForGroup(group);
});
sortAuditoriumsBySeatsButton.addEventListener("click", function () {
    sortAuditoriumsBySeats();
});
sortAuditoriumsByNamesButton.addEventListener("click", function () {
    sortAuditoriumsByNames();
});
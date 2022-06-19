const courses = [
    {
        name: 'Web Comics',
        date: 'oct 12, 2022',
        classes: '16',
        price: 100.50,
    },
    {
        name: 'Build Cute Robots',
        date: 'oct 25, 2022',
        classes: '12',
        price: 95.99,
    },
    {
        name: 'Cooking Organic Meals',
        date: 'Nov 05, 2022',
        classes: '15',
        price: 108,
    },
];

function searchProduct() {
        const searchField = document.getElementById('search-field');
        const searchTerm = searchField.value.trim();
        // ' tab ' => .trim() => 'tab'
        const searchResult = courses.filter(course => {
            return course.name.toLowerCase().includes(searchTerm.toLowerCase())
        });
        displayCourses (searchResult);
    }

function displayCourses (courses){
    const container = document.getElementById('container');
    let html = '';

    courses.forEach(course => {
        html += 
            `<tr>
                <td>${course.name}</td>
                <td>${course.date}</td>
                <td>${course.classes}</td>
                <td>${course.price + '$'}</td>
                </tr>`;
    })
        container.innerHTML += html;
}

displayCourses(courses);
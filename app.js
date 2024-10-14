class User {
    constructor(firstName, lastName, username, age, maritalStatus, isEmployed, isFounder) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.age = age;
        this.maritalStatus = maritalStatus;
        this.isEmployed = isEmployed;
        this.isFounder = isFounder;
    }
}

let users = [
    new User("David", "Garcia", "david.garcia_478", 36, "unmarried", false, false),
    new User("Charlotte", "Miller", "charlotte.miller_703", 48, "married", true, false),
    new User("James", "Anderson", "james.anderson_740", 57, "married", true, false),
    new User("Ava", "Brown", "ava.brown_618", 30, "unmarried", false, false),
    new User("Liam", "Jones", "liam.jones_190", 20, "married", false, false),
    new User("Emily", "Harris", "emily.harris_112", 34, "married", false, false),
    new User("Charlotte", "Smith", "charlotte.smith_883", 51, "unmarried", true, false),
    new User("Sophia", "Harris", "sophia.harris_368", 54, "unmarried", false, false),
    new User("Lucas", "Wilson", "lucas.wilson_394", 43, "married", true, false),
    new User("Sophia", "Wilson", "sophia.wilson_318", 23, "married", false, false),
    new User("Henry", "Martin", "henry.martin_133", 33, "unmarried", true, false),
    new User("Lucas", "Harris", "lucas.harris_919", 30, "married", false, false),
    new User("Ethan", "Martin", "ethan.martin_258", 49, "unmarried", false, false),
    new User("Alice", "Robinson", "alice.robinson_281", 52, "unmarried", true, false),
    new User("David", "Garcia", "david.garcia_858", 57, "unmarried", false, false),
    new User("Henry", "Martin", "henry.martin_260", 26, "married", true, false),
    new User("Michael", "Martin", "michael.martin_867", 54, "married", false, false)
];

let editingUserId = null;

function renderUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <div>
                <strong>${user.firstName} ${user.lastName}</strong> (${user.username}) - Age: ${user.age} - Marital Status: ${user.maritalStatus} - Employed: ${user.isEmployed ? 'Yes' : 'No'} - Founder: ${user.isFounder ? 'Yes' : 'No'}
            </div>
            <div class="actions">
                <button class="edit-btn" onclick="editUser(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
            </div>
        `;
        userList.appendChild(userCard);
    });
}

function addUser(firstName, lastName, username, age, maritalStatus, isEmployed, isFounder) {
    const user = new User(firstName, lastName, username, age, maritalStatus, isEmployed, isFounder);
    users.push(user);
    renderUserList();
}

function updateUser(firstName, lastName, username, age, maritalStatus, isEmployed, isFounder) {
    const user = users[editingUserId];
    user.firstName = firstName;
    user.lastName = lastName;
    user.username = username;
    user.age = age;
    user.maritalStatus = maritalStatus;
    user.isEmployed = isEmployed;
    user.isFounder = isFounder;
    renderUserList();
}

function deleteUser(index) {
    users.splice(index, 1);
    renderUserList();
}

function editUser(index) {
    const user = users[index];
    document.getElementById('first-name').value = user.firstName;
    document.getElementById('last-name').value = user.lastName;
    document.getElementById('username').value = user.username;
    document.getElementById('age').value = user.age;
    document.getElementById('marital-status').value = user.maritalStatus;
    document.getElementById('is-employed').value = user.isEmployed ? 'true' : 'false';
    document.getElementById('is-founder').value = user.isFounder ? 'true' : 'false';
    editingUserId = index;
    document.getElementById('form-title').innerText = 'Edit User';
    document.getElementById('submit-btn').innerText = 'Update User';
}

document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const maritalStatus = document.getElementById('marital-status').value;
    const isEmployed = document.getElementById('is-employed').value === 'true';
    const isFounder = document.getElementById('is-founder').value === 'true';

    if (editingUserId !== null) {
        updateUser(firstName, lastName, username, age, maritalStatus, isEmployed, isFounder);
        editingUserId = null;
        document.getElementById('form-title').innerText = 'Add User';
        document.getElementById('submit-btn').innerText = 'Add User';
    } else {
        addUser(firstName, lastName, username, age, maritalStatus, isEmployed, isFounder);
    }

    // Clear form fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';
    document.getElementById('marital-status').value = 'unmarried';
    document.getElementById('is-employed').value = 'true';
    document.getElementById('is-founder').value = 'false';
});

// Initial render
renderUserList();

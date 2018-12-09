'use strict';

const userSearchEl = document.querySelector('.user-nickname');

const submitBtnEl = document.querySelector('.submit-btn');

const nameListEl = document.querySelector('.name-list');

// When the button is clicked
function handleBtnClick (event) {
    // Prevent the default behaviour of a submit button in a form (else it will refresh the page)
    event.preventDefault();

    // a. Pick the nickname written in the search bar (input value)
    const userNickname = userSearchEl.value;

    // b. Fetch GitHub user's API
    fetch(`https://api.github.com/users/${userNickname}`)
    .then(response => response.json())
    .then(data => {

        // c. Access full name in GitHub API
        const userFullName = data.name;

        // d. Select first name only (without last name and/or spaces)
        const userFullNameArr = userFullName.split(' ');

        const userFirstName = userFullNameArr[0];

        // e. Paint in HTML each letter of the first name as a <li> in a <ol>
        const userFirstNameArr = userFirstName.split('');

        let nameListContent = '';

        for (let i = 0; i < userFirstNameArr.length; i++) {
            nameListContent += `<li class="list-item">${userFirstNameArr[i]}</li>`;
        }

        nameListEl.innerHTML = nameListContent;
    })
}

submitBtnEl.addEventListener('click', handleBtnClick);
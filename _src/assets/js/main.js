'use strict';

const userSearchEl = document.querySelector('.user-nickname');

const submitBtnEl = document.querySelector('.submit-btn');

// When the button is clicked
function handleBtnClick (event) {
    // Prevent the default behaviour of a submit button in a form
    event.preventDefault();

    // a. Pick the nickname written in input (input value)
    const userNickname = userSearchEl.value;

    // b. Fetch GitHub API
    fetch(`https://api.github.com/users/${userNickname}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // c. Access full name in GitHub API
        const userFullName = data.name;
        console.log(userFullName);

        // d. Select first name only (without last name and/or spaces)
        const userFullNameArr = userFullName.split(' ');
        console.log(userFullNameArr);

        const userFirstName = userFullNameArr[0];
        console.log(userFirstName);
    })

    // e. Paint in HTML a <ol>, each letter of the name must be in a <li>
}
    

submitBtnEl.addEventListener('click', handleBtnClick);
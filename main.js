// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
// ## 1. `isAdmin`

// Write a function, `isAdmin` that takes in a user object and returns true if the user is an admin,
// as indicated by their `userRole` key. All admins' `userRole` attributes are equal to `'ADMIN'`.


function isAdmin(user){
    if(user.userRole === "ADMIN"){
        return true;
    }
    else{
        return false;
    }
}


// ## 2. `getEmail`

// Write a function, `getEmail`, that given a user object, return the users' Code Immersives email. We'll assume that
// a Code Immersives email is always in `firstName.lastName@codeimmersives.com` form.

function getEmail(user){
    return user.firstName.toLowerCase() + "." + user.lastName.toLowerCase() + "@codeimmersives.com";
}

// ## 3. `getPlaylistLength`

// Write a function, `getPlaylistLength` that takes in a playlist and returns the number of songs in the playlist


function getPlaylistLength(playlist){
    return playlist.songs.length;
}

// ## 4. `getHardestHomework`

// Write a function, `getHardestHomework` that takes in an array of homework objects and returns the name of 
// the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.


function getHardestHomework(arr){
    let lowestScore = 100;
    let hardestHomework = '';

    for (let i = 0; i < arr.length; i++){
        const score = arr[i].averageScore;
        if (score < lowestScore){
            lowestScore = score;
            hardestHomework = arr[i].name
        }
    }
    return hardestHomework;
}


// ## 5. `createPhonebook`

// Write a function, `createPhonebook`, that creates a phonebook object from an array of names
// and phone numbers.

function createPhonebook(firstNameArr, numArr, phonebook = {}){
    for (let i = 0; i < firstNameArr.length; i ++){
        let firstName = firstNameArr[i];
        let phone = numArr[i];
        phonebook[firstName] = phone;
    }
    return phonebook;
}













// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};
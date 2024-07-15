// Get the results
const queryString = window.location.search;
console.log(queryString);
// Wrap it
const urlParams = new URLSearchParams(queryString);

// Get everything individually

const name = urlParams.get('name')
console.log(name);
// The name of the user.

const email = urlParams.get('email')
console.log(email);
// The email of the user.

const age = urlParams.get('age')
console.log(age);
// The age of the user.

const role = urlParams.get('role')
console.log(role);
// The role of the user.

const userExperience = urlParams.get('userExperience')
console.log(userExperience);
// The userExperience of the user.

const value = urlParams.get('value')
console.log(value);
// Value rating.

const expectations = urlParams.get('expectations')
console.log(expectations);
// Expectations rating.

const easeOfUse = urlParams.get('easeOfUse')
console.log(easeOfUse);
// EaseOfUse rating.

const recommend = urlParams.get('recommend')
console.log(recommend);
// Recommend rating.

const comments = urlParams.get('comments')
console.log(comments);
// comments rating.
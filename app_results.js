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

const company = urlParams.get('company')
console.log(company);
// The company that the user is rating.

const userExperience = parseInt(urlParams.get('userExperience'))
console.log(userExperience);
// The userExperience of the user.

const value = parseInt(urlParams.get('value'))
console.log(value);
// Value rating.

const expectations = parseInt(urlParams.get('expectations'))
console.log(expectations);
// Expectations rating.

const easeOfUse = parseInt(urlParams.get('easeOfUse'))
console.log(easeOfUse);
// EaseOfUse rating.

const recommend = parseInt(urlParams.get('recommend'))
console.log(recommend);
// Recommend rating.

const comments = urlParams.get('comments')
console.log(comments);
// comments rating.

average = (userExperience + value + expectations + easeOfUse + recommend) / 5;

console.log(average)

if (average == 5)
{
    let prompt = document.querySelector("#prompt")
    prompt.innerHTML = "Thanks for the 5 star rating! Would you like to leave a Yelp Review?"

    let direct_button = document.querySelector("#direct_button")
    direct_button.innerHTML = "Go to Yelp"
    if (company == "revive")
    {
        direct_button.href = "https://www.yelp.com/biz/revive-roofing-and-construction-newton"
        direct_button.target = "_blank"
    }
    else if (company == "serve")
    {
        direct_button.href = "https://www.yelp.com/biz/serve-pest-control-provo-2"
        direct_button.target = "_blank"
    }

}
const getAllUserEmails = async () =>{
    const response = await response.json();
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(users => {
        return users.email;
    });

    postToWebPage(userEmailArray);
}
const postToWebPage = (data) =>{
    console.log(data)
}

getAllUserEmails();
// if you attemt to the return the information from a user email array it 
// promise pending 

const myUsers = {
    userList:[]
}

const myCoolFunction = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () =>{
    const data = await myCoolFunction();
    myUsers.userList = data
    console.log(myUsers.userList);
}
anotherFunc();
console.log(myUsers.userList)// This will return an empty array because// the async has an await function that is waiting and is on a pending state in
// promises
// For it to work you have to put it in the anotherFunc() before logging it.

//Fetch Example
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            Accept:"application/json" // if you use text/plain it returns a text 
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
    console.log(jsonJokeData.joke);
}

getDadJoke();

// Fetch post
const jokeObject = {
    id: 'AQn3wPKeqrc',
    joke:"It was raining cats and dogs the other day. I almost stepped in a poodle."
}

const postData = async(jokeObject) =>{
    const response = await fetch("https://httpbin.org/post",{
        method:"Post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(jokeObject)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse.headers);
}
postData(jokeObject);

const requestJoke = async (firstName,lastName) =>{
    const response = await fetch (`http://api.icndb.com/jokes/random?firstName=${firstName}
    &lastName=${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();
    console.log(jsonResponse.value.joke);
}
requestJoke("Bruce","Lee")

//Abstracting these to functions
const getDataFromForm = ()=>{
    const requestObj = {
        firstName: "Bruce",
        lastName:"Lee",
        categories:["nerdy"]
    };
    return requestObj
}

const buildRequestUrl = (requestData) =>{
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}
    &lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestFuncJoke = async(url) =>{
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) =>{
    console.log(joke)
}

const processJokeRequest = async() =>{
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();
 
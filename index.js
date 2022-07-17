// // Add your code here
// const submitData = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         "name" : 'Steve',
//         "email" : 'steve@steve.com',
//     })
// }

// fetch("http://localhost:3000/users" , submitData)
// .then(response => response.json())
// .then(object => {
//     console.log(object);
// })


function submitData(name, email) {
    const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        "name" : name,
        "email" : email,
    })
};

function newId(user) {
    const newID = document.querySelector('body').innerHTML = user
}


    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => newId(data.id))
    .catch(error => {
        console.error(error)
        document.querySelector('body').innerHTML = '<h2>Unauthorized Access</h2>'
    })
    
}



submitData('Steve', 'steve@steve.com')
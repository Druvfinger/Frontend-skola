fetch('https://reqres.in/api/users',{
    method: 'POST',    //creates a new user
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}) // returns response

.then(res => { // this returns a promise
    return res.json()
}) 
.then(data => console.log(data)) // this returns an object array

/*
   if(res.ok){     //Checks that the response came through
        console.log('SUCCESS')
    }else{
        console.log('UNSUCCESSFUL')
    }
*/
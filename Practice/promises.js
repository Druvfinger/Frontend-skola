/*You pass it a url as it's first and can take another one
fetch('https://reqres.in/api/users')
.then(res => res.json(res)) //res is a response object
.then(data => console.log(data))*/

let p = new Promise((resolve, reject) =>{
    let a = 1 + 2
    if(a === 2){
        resolve('success')
    }else{
       reject('failed') 
    }
})

p.then((message) =>{
    console.log('This is in the then ' + message);
}).catch((message) =>{
    console.log('This is in the catch ' + message);
})
/*
Promise rejected, resolve
then triggers of of a resolve aka success
*/

const userLeft = false;
const userWatchingCatMeme = true;
function watchTutorialPromise(){
  return new Promise((resolve, reject) =>{
    if(userLeft){
        reject({
            name: 'User Left',
            message: ':('
        });
    }else if(userWatchingCatMeme){
        reject({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        });
    }else{
        resolve('Thumbs up and Subscribe');
    }
  });
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
});

const recordVideoOne = new Promise((resolve, reject) =>{
    resolve('video 1 Recorded')
});

const recordVideoTwo = new Promise((resolve, reject) =>{
    resolve('video 2 Recorded')
});

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve('video 3 Recorded')
});

/*Promise.all runs all of the promises at the same time so you don't 
have to wait if one takes longer*/

/*Promise.race returns as soon as the first one is completed will always just return 1*/
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages);
})

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}
/*
makeRequest('Google').then(response => {
    console.log('Response Received')
    processRequest(response)
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})
*/

//async await
/*
await tells it to wait until that function is finnished running
then after execute the next thing
*/
async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err){
        console.log(err)
    }

}
doWork()
export function getMoviesFromApiAsync()
{
    // console.log("function called");
    // try {
    //     let response = await fetch('http://localhost:3334/imageB');
    //     return response
    // } catch(error) {
    //     console.error(error);
    // }
    //
    console.log("method called");
    return fetch('http://localhost:3334/imageB', {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'GET',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}
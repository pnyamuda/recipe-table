export let fetchCalories = (bodyObject) => {
    var myHeaders = new Headers();
    myHeaders.append("x-app-id", "c4d6ac49");
    myHeaders.append("x-app-key", "c1966ef7b707a2c46416ab58f5f434ba");
    myHeaders.append("x-remote-user-id", "0");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(bodyObject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://trackapi.nutritionix.com/v2/natural/exercise", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

async function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const STOP_ID = document.getElementById('stopId');

    let stopIdValue = STOP_ID.value;

    try{
        const res = await fetch(`${BASE_URL}${stopIdValue}`);
        const data = await res.json();

        console.log(res)
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
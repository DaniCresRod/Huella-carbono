async function Connect(){
    let response = await fetch("https://beta4.api.climatiq.io/estimate", {
        method:'POST',
        headers:{
            'Authorization': 'Bearer XHYQ4Z9S7BM9BHNW0ESBBJHT7K13',
            'Content-Type': "application/json"
        },
        body: JSON.stringify({

            "instance":"t2.nano",
            "region":"ES",
            "duration": 24,
            "duration_unit":"h"

            /*
            "emission_factor": {
                "activity_id": "heat_and_steam-type_district",
                "data_version": "^1"
            },
            "parameters": {
                "energy": 100,
                "energy_unit": "kWh"
            }*/
        }),
        redirect: 'follow'        
        
    } );

    let data=await response.json();
    //console.log(data);
    return data;
}

let miPromesa=Connect();

miPromesa.then(x=>{
    console.log(x);
    document.write(x.co2e + x.co2e_unit);
});
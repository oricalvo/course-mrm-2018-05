main();

async function main() {
    try {
        const promise = g();

        const res = await promise;

        

        // const res = await getDataFromServer();
        // console.log(res);
    }
    catch(err) {
        console.log("ERROR: " + err.message);
    }
}

function getDataFromServer() {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            resolve(42);
            resolve(100);
            // reject(new Error("Ooops"));
        }, 2000);
    });
}

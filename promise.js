async function willSucess(resolve , reject)
{
	console.log("willSucess start");
	let sum = 0;
	for(let i = 0 ; i < 5000000000 ; i++)
		sum += i;	
	console.log("willSucess end");
	resolve();
}

let successPromise = new Promise(willSucess)

successPromise.
    then(function () {
        console.log('callback success');
    }).
    catch(function () {
        console.log('call back failed');
    });

console.log("do something else here");

////////////////////////////////////////////
function willFail(resolve , reject)
{
	console.log("willFail start");
	let sum = 0;
	for(let i = 0 ; i < 5000000000  ; i++)
		sum += i;	
	console.log("willFail end");
	reject();
}

let failPromise = new Promise(willFail)

failPromise.
    then(function () {
        console.log('callback success');
    }).
    catch(function () {
        console.log('call back failed');
    });

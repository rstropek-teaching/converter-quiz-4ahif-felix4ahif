var error = false;
var convert = require('convert-units');

if(convert().possibilities().indexOf(process.argv[3]) <= -1 || convert().possibilities().indexOf(process.argv[5]) <= -1){
    error = true;
}

if(process.argv.length < 6 || process.argv.length > 6){
    error = true;
}

if(process.argv[2] <= 0 || process.argv[4] != "to"){
    error = true;
}

if(process.argv[2] > 0){
    if(error === false){
        var targetUnit = convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]);
        console.log(process.argv[2] + ' ' + process.argv[3] + ' are ' + targetUnit + ' ' + process.argv[5]);
    }else{
        console.log("Invalid parameters");
    }
}else{
    console.log("Invalid parameters");
}
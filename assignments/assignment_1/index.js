function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const process=require('process')
    return process.argv[2]
}

function getNameFromEnv() {
    // Write your code here
    const process=require('process')
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code here
    const readline=require('readline');
    var rl = readline.createInterface(
        process.stdin, process.stdout);
        rl.question((name) => {
            return name
        });
    rl.close();

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
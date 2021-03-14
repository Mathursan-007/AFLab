//1
console.log("Hello World");

//2
const os = require('os');//to import package use require

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);

for(const cpu in os.cpus()){
    console.log(cpu);
}

console.log('OS ' + os.platform());

//3
const fs = require('fs');
const fileName = __dirname + '/test.txt';//setting the file path using __dirname

fs.readFile(fileName, (err, data) => {

    //false if err = null/undefined/0/''/false

    if (err) {
        console.error(err);
    }
    console.log(data.toString()+"async1");
    console.log(data);//will print buffer
});

const syncdata = fs.readFileSync(fileName);//to read synchronously,will block the other operation in main thread
console.log(syncdata.toString());

fs.readFile('test.txt', "utf8",(err, data) => {//using encoding
    console.log(data+" async2");
});


4

const outFileName = __dirname + '/test-copy.txt';

const readstream = fs.createReadStream('test.txt');
const writestream = fs.createWriteStream(outFileName);

readstream.addListener('end',()=>{
    console.log('End of file read');
})

writestream.on('close',data =>{
    console.log('End of file write');
});


readstream.pipe(writestream);//directing the read to write






//5
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);


http.createServer((req, res) => {
    res.setHeader('Contetnt-Type','text/html');

    switch(req.method){
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
        case 'PUT':
            req.on('data',(data)=>{
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
                }
            );
            break;
    }
}).listen(3000,(err) =>{
       if(err){
           console.log(err);
           return;
       }
       console.log('Server is listening to port 3000');

} );


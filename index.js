// inisialisasi modl http
const http = require('http');

// buat server
const server = http.createServer((req,res)=>{
    /* res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Selamat Pagi'); */

    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(req.url === '/dosen'){
        message = 'List data dosen';
        data = ['Ahmad','Hafiz','Widi'];
    }else if(req.url === '/mahasiswa'){
        message = 'List data Mahasisa';
        data =['Pania','Khema','Fitri'];
    }else{
        message = 'Tidak ditemukan';
        data=[];
    }
    res.end(JSON.stringify({
        'massage': message,
        'data': data,
        'status':'success'
    }));
});

const port = 3000;
const host = 'localhost';

server.listen(port,host,() =>{
    console.log(`Server Berjalan di http://${host}:${port}`);
});


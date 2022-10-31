const csvService = require('./src/csvService');
const sftpService = require('./src/sftpService');

const config = {
  host: '192.168.1.13',
  port: '22',
  username: 'test',
  password: 'test'
};

const m = async () => {
  try {
    // ---- TESTING SFTP ----
    // List Files
    // console.log(await sftpService.listFiles({ ...config, remotePath: '/' }));
    // Get File
    // console.log(Buffer.from(await sftpService.getFile({ ...config, remotePath: '/fileGet.csv' })).toString());
    // Put File
    // const bufferFile = Buffer.from('HOLA');
    // console.log(await sftpService.putFile({ ...config, remotePath: '/filePut.csv', bufferFile }));
    // ---- TESTING MOVII LOGIC ----
    // Getting csv array from server
    const csvBufferFile = await sftpService.getFile({ ...config, remotePath: '/fileGett.csv' });
    // const csvArray = csvService.getArrayFromCSVBuffer(csvBufferFile, ';');
    // console.log(csvArray);
    console.log(csvBufferFile);

    // Putting csv from array
    // const arrayToPut = [
    //   { c1: '1', c2: '2', c3: '3' },
    //   { c1: '4', c2: '5', c3: '6' }
    // ];
    // const csvArrayPutBuffer = csvService.getCSVBufferFromArray(arrayToPut, ';');
    // await sftpService.putFile({ ...config, remotePath: '/filePutArray.csv', bufferFile: csvArrayPutBuffer });
  } catch (error) {
    console.log(error);
  }
};

m();

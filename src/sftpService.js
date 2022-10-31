const Client = require('ssh2-sftp-client');

const handler = async ({ host, port, username, password, method }) => {
  let sftpClient;
  try {
    sftpClient = new Client();
    await sftpClient.connect({ host, port, username, password });
    return await method(sftpClient);
  } catch (error) {
    console.log(error);
  } finally {
    await sftpClient.end();
  }
};

const listFiles = async ({ host, port, username, password, remotePath }) => {
  return await handler({
    host,
    port,
    username,
    password,
    method: async sftpClient => sftpClient.list(remotePath)
  });
};

const getFile = async ({ host, port, username, password, remotePath }) => {
  return await handler({
    host,
    port,
    username,
    password,
    method: async sftpClient => sftpClient.get(remotePath)
  });
};

const putFile = async ({ host, port, username, password, remotePath, bufferFile }) => {
  return await handler({
    host,
    port,
    username,
    password,
    method: async sftpClient => sftpClient.put(bufferFile, remotePath)
  });
};

exports.getFile = getFile;
exports.putFile = putFile;
exports.listFiles = listFiles;

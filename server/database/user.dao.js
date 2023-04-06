//get  the client

const mysql= require('mysql2/promise');

const getConnection = async()=>{
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"123456",
        database: 'reactdb'
    });
    return connection;
}

const validateUserLogin = async(email, password) =>{
     
    const query = `SELECT * FROM usertable WHERE email ='${email}' AND password = '${password}'`
    const connection= await getConnection();
    const[rows] =await connection.execute(query);
    return rows;
}

module.exports = {
    validateUserLogin
}
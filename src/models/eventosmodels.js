import conn from '../config/conn.js'

const UserTable  = /*sql*/ `
    CREATE TABLE IF NOT EXISTS eventos ( 
    
    titulo VARCHAR(255) NOT NULL, 
    data DATE NOT NULL,
    palestrantesId  VARCHAR(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    
    )



`;
conn.query(UserTable , ( err) => {
    if(err)
    {
        console.error(err)
        return
    }
    console.log("Tabela de [eventos] criado com sucesso")   
})


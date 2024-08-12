import conn from '../config/conn.js'

const UserTable  = /*sql*/ `
    CREATE TABLE IF NOT EXISTS eventos ( 

    usuario_id int PRIMARY KEY auto_increment,
    nome VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
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


import conn from '../config/conn.js'

const UserTable  = /*sql*/ `
    CREATE TABLE IF NOT EXISTS participantes ( 

    usuario_id int PRIMARY KEY auto_increment,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
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
    console.log("Tabela de [participantes] criado com sucesso")
})


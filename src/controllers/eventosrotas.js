import {conn , handleError} from '../config/conn.js'



export const register = ( req , resp ) =>   {
    console.log(req)
    try {
        conn.query(
          `INSERT INTO palestrantes   (nome, expertise ) VALUES ("${req.body.nome}","${req.body.expertise}")`,
          (error, results) => {
            if (error) {
              handleError(
                resp,
                error,
                "Erro ao tentar recuperar os dados dos usuários!"
              );
            } else {
                resp.status(200).json({"message" : " User criado com sucesso !"});
            }
          }
        );
      } catch (error) {
        handleError(resp, error, "Erro ao tentar criar os usuários.");
      }
}

export const getall = ( req , resp ) =>   {
    console.log(req)
    try {
        conn.query(
          `SELECT * FROM  palestrantes`,
          (error, results) => {
            if (error) {
              handleError(
                resp,
                error,
                "Erro ao tentar recuperar os dados dos usuários!"
              );
            } else {
                resp.status(200).json(results);
            }
          }
        );
      } catch (error) {
        handleError(resp, error, "Erro ao tentar listar os usuários.");
      }
}
import { conn, handleError } from "../config/conn.js";

export const register = (req, resp) => {
  console.log(req);
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
          resp.status(200).json({ message: " User criado com sucesso !" });
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar criar os usuários.");
  }
};

export const getall = (req, resp) => {
  console.log(req);
  try {
    conn.query(`SELECT * FROM  palestrantes`, (error, results) => {
      if (error) {
        handleError(
          resp,
          error,
          "Erro ao tentar recuperar os dados dos usuários!"
        );
      } else {
        resp.status(200).json(results);
      }
    });
  } catch (error) {
    handleError(resp, error, "Erro ao tentar listar os usuários.");
  }
};

export const registerevento = (req, resp) => {
  let palestra = "";
  req.body.palestrantesId.forEach((element, size) => {
    if (req.body.palestrantesId.length - 1 != size) palestra += `${element},`;
    else palestra += `${element}`;
  });

  console.log(palestra);
  try {
    conn.query(
      `INSERT INTO eventos   (titulo, data,palestrantesId ) VALUES ("${req.body.titulo}","${req.body.data}" ,"${palestra}")`,
      (error, results) => {
        if (error) {
          handleError(
            resp,
            error,
            "Erro ao tentar recuperar os dados dos eventos!"
          );
        } else {
          resp.status(200).json({ message: " evento criado com sucesso !" });
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar criar os eventos.");
  }
};
export const registerparticipante = (req, resp) => {

  try {
    conn.query(
      `INSERT INTO participantes   (nome, email ) VALUES ("${req.body.nome}","${req.body.email}")`,
      (error, results) => {
        if (error) {
          handleError(
            resp,
            error,
            "Erro ao tentar recuperar os dados dos Usuario!"
          );
        } else {
          resp.status(200).json({ message: " Usuario criado com sucesso !" });
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar criar os Usuario.");
  }
};

export const loginparticipante = (req, resp) => {

  try {
    conn.query(
      `INSERT INTO participantes   (id, eventoid ) VALUES ("${req.body.id}","${req.body.eventoid}")`,
      (error, results) => {
        if (error) {
          handleError(
            resp,
            error,
            "Erro ao tentar recuperar os dados dos Usuario!"
          );
        } else {
          resp.status(200).json({ message: " Usuario criado com sucesso !" });
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar criar os Usuario.");
  }
};




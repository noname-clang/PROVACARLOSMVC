import { conn, handleError } from "../config/conn.js";

export const register = (req, resp) => {
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

export const registerfeedback = (req, resp) => {
  let mysave = "";
  try {
    conn.query(
      `SELECT avaliacoes FROM eventos WHERE id = ${req.body.eventoId}`,
      (error, results) => {
        if (error) {
          handleError(
            resp,
            error,
            "Erro ao tentar recuperar os dados dos eventos!"
          );
        } else {
          mysave = results[0].avaliacoes + `,${req.body.nota}`;
          conn.query(
            `UPDATE eventos SET avaliacoes = "${mysave}" WHERE id = ${req.body.eventoId}`,
            (error, results2) => {
              if (error) {
                handleError(
                  resp,
                  error,
                  "Erro ao tentar recuperar os dados dos eventos!"
                );
              } else {
                resp
                  .status(200)
                  .json({ message: " Evento avaliado com sucesso !" });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar criar os eventos.");
  }
};

export const getmaispopular = (req, resp) => {
  let value = [];
  let mysave = 0;
  try {
    conn.query(`SELECT * FROM eventos`, (error, results) => {
      if (error) {
        handleError(
          
          resp,
          error,
          "Erro ao tentar recuperar os dados dos usuários!"
        );
      } else {
        results.map((element, pos) => {
          mysave = 0;
          for (let i = 0; i < element.avaliacoes.split(",").length; i++) {
            mysave += Number(element.avaliacoes.split(",")[i]);
          }
          mysave += `   -> Evento id : ${pos}`; /// dor de cbc n deixa eu prosseguir
          value.push(mysave);
          console.log(value);
        });
        resp.status(200).json({
          valor: Math.max.apply(null, value[0]),
        });
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

export const deleteevento = (req, resp) => {
  try {
    conn.query(
      `DELETE FROM eventos WHERE id=${req.params["id"]}`,
      (error, results) => {
        if (error) {
          handleError(
            resp,
            error,
            "Erro ao tentar recuperar os dados do evento!"
          );
        } else {
          resp.status(200).json({ message: " Evento deletado com sucesso !" });
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar deletar o Evento.");
  }
};

export const editarevento = (req, resp) => {
  let palestra = "";
  req.body.palestrantesId.forEach((element, size) => {
    if (req.body.palestrantesId.length - 1 != size) palestra += `${element},`;
    else palestra += `${element}`;
  });
  try {
    conn.query(
      `UPDATE eventos SET titulo = "${req.body.titulo}", data =" ${req.body.data}", palestrantesId =" ${palestra}" WHERE id=${req.body.eventoId}`,
      (error, results) => {
        if (error) {
          handleError(
            resp,
            error,
            "Erro ao tentar recuperar os dados do evento!"
          );
        } else {
          resp.status(200).json({ message: " Evento editado com sucesso !" });
        }
      }
    );
  } catch (error) {
    handleError(resp, error, "Erro ao tentar editar o Evento.");
  }
};

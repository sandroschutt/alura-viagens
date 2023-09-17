const database = require("../models/index.js");

class DestinosController {
  static async getAllDestinos(req, res) {
    try {
      const search = req.query.name;

      if (!search) {
        const todosDestinos = await database.destino.findAll();
        return res.status(200).json(todosDestinos);
      } else {
        const destinoBuscado = await database.destino.findOne({
          where: {
            name: search,
          },
        });

        if (destinoBuscado !== null) {
          return res.status(200).json(destinoBuscado);
        } else throw new Error(`O destino ${id} não foi encontrado`);
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getLastDestinos(req, res) {
    try {
      const ultimosDestinos = await database.destino.findAll({
        order: [["id", "DESC"]],
        limit: 3,
      });
      return res.status(200).json(ultimosDestinos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getDestino(req, res) {
    const { id } = req.params;
    try {
      const destinoSelecionado = await database.destino.findOne({
        where: {
          id: Number(id),
        },
      });

      if (destinoSelecionado !== null) {
        const destinoEncontrado = {
          name: destinoSelecionado.name,
          photo: destinoSelecionado.photo,
          photo2: destinoSelecionado.photo2,
          meta: destinoSelecionado.meta,
          description: destinoSelecionado.description,
        }

        return res.status(200).json(destinoEncontrado);
      } else throw new Error(`O destino ${id} não foi encontrado`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getDestinoByName(req, res) {
    const name = req.query.name;
    try {
      const destinoBuscado = await database.destino.findOne({
        where: {
          name: name,
        },
      });

      if (destinoBuscado !== null) {
        return res.status(200).json(destinoBuscado);
      } else throw new Error(`O destino ${id} não foi encontrado`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async postDestino(req, res) {
    const novoDestino = req.body;
    try {
      const novoDestinoCriado = await database.destino.create(novoDestino);
      return res.status(200).json(novoDestinoCriado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async putDestino(req, res) {
    const { id } = req.params;
    const atualizaDestino = req.body;
    try {
      const destinoAtualizado = await database.destino.update(atualizaDestino, {
        where: {
          id: Number(id),
        },
      });

      if (destinoAtualizado != false) {
        return res.status(200).send(destinoAtualizado);
      } else
        throw new Error(
          `O destino ${id} não foi encontrado`,
          { cause: err },
          { details: "http error" }
        );
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  static async deleteDestino(req, res) {
    const { id } = req.params;
    try {
      const destinoDeletado = await database.destino.destroy({
        where: {
          id: Number(id),
        },
      });

      if (destinoDeletado != false) {
        return res
          .status(200)
          .send(`O destino ${id} foi deletado do banco de dados`);
      } else throw new Error(`O destino ${id} não foi encontrado`);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = DestinosController;

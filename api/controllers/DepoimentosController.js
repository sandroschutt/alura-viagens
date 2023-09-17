const database = require("../models/index.js");

class DepoimentosController {
  static async getAllDepoimentos(req, res) {
    try {
      const todosDepoimentos = await database.depoimento.findAll();
      return res.status(200).json(todosDepoimentos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getDepoimento(req, res) {
    const { id } = req.params;
    try {
      const depoimentoSelecionado = await database.depoimento.findOne({
        where: {
          id: Number(id),
        },
      });

      if (depoimentoSelecionado !== null) {
        return res.status(200).json(depoimentoSelecionado);
      } else throw new Error(`O depoimento ${id} não foi encontrado`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getLastDepoimentos(req, res) {
    try {
      const ultimosDepoimentos = await database.depoimento.findAll({
        order: [["id", "DESC"]],
        limit: 3,
      });
      return res.status(200).json(ultimosDepoimentos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async postDepoimentos(req, res) {
    const novoDepoimento = req.body;
    try {
      const userExists = await database.user.findOne({
        where: {
          id: Number(novoDepoimento.userId),
        },
      });

      if (userExists != undefined) {
        const novoDepoimentoCriado = await database.depoimento.create(
          novoDepoimento
        );
        return res.status(200).json(novoDepoimentoCriado);
      } else {
        throw new Error(
          `O usuário ${novoDepoimento.userId} não foi encontrado.`
        );
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async putDepoimentos(req, res) {
    const { id } = req.params;
    const atualizaDepoimento = req.body;
    try {
      const depoimentoAtualizado = await database.depoimento.update(
        atualizaDepoimento,
        {
          where: {
            id: Number(id),
          },
        }
      );

      if (depoimentoAtualizado != false) {
        return res.status(200).send(depoimentoAtualizado);
      } else throw new Error(`O depoimento ${id} não foi encontrado`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteDepoimentos(req, res) {
    const { id } = req.params;
    try {
      const depoimentoDeletado = await database.depoimento.destroy({
        where: {
          id: Number(id),
        },
      });

      if (depoimentoDeletado != false) {
        return res
          .status(200)
          .send(`O depoimento ${id} foi deletado do banco de dados`);
      } else throw new Error(`O depoimento ${id} não foi encontrado`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = DepoimentosController;

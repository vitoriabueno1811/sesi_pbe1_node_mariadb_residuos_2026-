const db = require('../db');

module.exports = {
    listar(req, res) {
        const query = 'SELECT * FROM ocorrencia';
        
        db.query(query, (err, resultados) => {
            if (err) {
                console.error("Erro ao buscar ocorrências:", err);
                return res.status(500).json({ erro: "Erro ao buscar ocorrencias" });
            }
            return res.json(resultados);
        });
    }
};

const listar = (req, res) => {
    const query = 'SELECT * FROM ocorrencia;';

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar ocorrencia' });
        } else {
            res.json(results);
        }
    });
};

const cadastrar = (req, res) => {
    const { id,usuarioId, local, tipoResiduo, nivelRisco, data, status } = req.body;

    const query = `
        INSERT INTO ocorrencia (id,usuarioId, local, tipoResiduo, nivelRisco, data, status)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [id,usuarioId, local, tipoResiduo, nivelRisco, data, status], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao cadastrar ocorrencia' });
        } else {
            res.status(201).json({ message: 'Ocorrencia cadastrada com sucesso', results });
        }
    });
};

const atualizar = (req, res) => {
    const { id } = req.params;
    const {usuarioId, local, tipoResiduo, nivelRisco, data, status  } = req.body;

    const query = `
        UPDATE ocorrencia
        SET usuarioId = ?, local = ?, tipoResiduo = ?, nivelRisco = ?, data = ?, status = ?
        WHERE id = ?;
    `;

    db.query(query, [usuarioId, local, tipoResiduo, nivelRisco, data, status, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar ocorrencia' });
        } else if (results.affectedRows == 0) {
            res.status(404).json({ error: 'Ocorrencia nao encontrada' });
        } else {
            res.json({ message: 'Ocorencias atualizadas com sucesso' });
        }
    });
};

const excluir = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM ocorrencia WHERE id = ?;';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao excluir Ocorrencia' });
        } else if (results.affectedRows == 0) {
            res.status(404).json({ error: 'Ocorrencia nao encontrada' });
        } else {
            res.json({ message: 'Ocorrencias excluida com sucesso' });
        }
    });
};

const resumo = (req, res) => {
    const query = `
        SELECT *, (SELECT AVG(tipoResiduos) FROM ocorrencia) AS contagemTotal
        FROM ocorrencia;
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar resumo' });
        } else {
            res.json({
                ocorrencias: results,
                contagemTotal: results.length > 0 ? results[0].contagemTotal : null
            });
        }
    });
};

module.exports = {
    listar,
    cadastrar,
    atualizar,
    excluir,
    resumo
};
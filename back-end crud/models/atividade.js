const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AtividadeSchema = new Schema({
    nome_atividade: {
        type: String,
        required: true
    },
    distancia_km: {
        type: Number
    },
    duracao_minutos: {
        type: Number
    },
    dia: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "Atividade"
});

module.exports = mongoose.model("Atividade", AtividadeSchema);

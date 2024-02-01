import { sequelize } from '../database.js'
import { DataTypes } from 'sequelize'

const Cerveja = sequelize.define('Cerveja', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abv: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacionalidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)

export { Cerveja }
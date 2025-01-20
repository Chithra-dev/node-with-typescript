import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize ('dbname','dbuser','dbpass',{host : 'localhost', dialect: 'mysql'});

export default sequelize;
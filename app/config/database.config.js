require('dotenv').config();

module.exports = async (Sequelize) => {
    // configuration for database
    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
        }
    )

    // test the database connection
    try {
        await sequelize.authenticate();
        console.log(`Connection has been established succesfully [database=${process.env.DB_NAME}]`);
    } catch(error) {
        console.error('Unable to connect to the database:', error);
    }
    
}
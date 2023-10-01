const validatorMsg = require('../validators/message.validator');
const validatorRule = require('../validators/rule.validator');

const User = (sequelize, DataTypes) => {
    sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: validatorMsg.requiredMsg({ field: 'First Name' })
                },
                notEmpty: {
                    msg: validatorMsg.requiredMsg({ field: 'First Name' })
                }
                // isEven(value) {
                //     validatorRule.isEven({ value: value, field: 'firstName' })
                // },  // <--- this is how to use custom validator
            }
        },
        lastName: {
            type: DataTypes.STRING,
        },
        // isAdmin: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // }
    });
};

module.exports = User;
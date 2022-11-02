const AccessModel = require('../models/Access');


/**
 * Creating new access
 */
const createAccess = assync (req, res, next) => {
    const {username, password, confirmPassword} = req.body;
    
    if (password === confirmPassword) {
        try {
            const access = new AccessModel({username, password})
            await access.save();
        } catch (e) {
            
        }
    }
};
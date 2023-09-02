import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret_key = process.env.SECRET_KEY;
const expiry_date = process.env.EXPIRY_DATE;

//Get Token
export const getToken = async (user) => {
    const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
    };

    const options = {
        expiresIn: expiry_date, // Make sure this value is valid (e.g., '1h')
    };
    const token = jwt.sign(payload, secret_key, options); // Make sure secretKey is defined
    return token;
};

//Verify Token
export const verifyToken = async (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret_key, (err, decoded) => {
            if (err) {
                console.error("Token verification failed:", err.message);
                reject(err); // Reject the promise in case of an error
                return;
            }

            resolve(decoded); // Resolve the promise with the decoded payload
        });
    });
};
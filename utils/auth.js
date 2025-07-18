import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET;
const expiration = '2h';


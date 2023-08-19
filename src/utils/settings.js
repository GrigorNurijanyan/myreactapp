import bcrypt from 'bcryptjs';

export const getEncriptedPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password);
    return hashedPassword
}
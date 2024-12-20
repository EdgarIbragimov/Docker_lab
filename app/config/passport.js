import passport from "passport";
import { readUsersData } from "../data/datamanager.js";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const userData = await readUsersData();
            const user = userData.find((user) => user.username === username);

            if (!user) {
                return done(null, false, { message: "Wrong Username" });
            }

            if (!bcrypt.compareSync(password, user.passwordHash)) {
                return done(null, false, { message: "Wrong password" });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);

export const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, "your-secret-key", {
        expiresIn: "1h",
    });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, "your-secret-key");
    } catch (error) {
        return null;
    }
};

export default passport;


import { prisma } from "../../lib/prisma";
import config from "../../config";
import bcrypt from "bcryptjs";
import { RegisterUserPayload } from "./user.interface";


const registerUserIntoDB = async (payload: RegisterUserPayload) => {
    
const { name, email, password } = payload;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, Number(config.bcript_salt_rounds));

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    await prisma.profile.create({
        data: {
            userId: newUser.id,

        }
    });

    const user = await prisma.user.findUnique({
        where: {
            id: newUser.id,
            email: newUser.email
        },
        omit: {
            password: true,
        },

        include: { profile: true }
    });
    return user;

}

export const userService = {    
registerUserIntoDB
}
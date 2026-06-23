
import httpStatus, { status } from "http-status";
import { Request, Response } from "express";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {

    try {
        const payload = req.body;
    
    
    const user = await userService.registerUserIntoDB(payload);

    res.status(httpStatus.CREATED).json({
        success: true,
        status: httpStatus.CREATED,
        message: "User registered successfully",
        data: {
            user
        }
    });
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: "Failed to register user",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }

}

export const userController = {
    createUser
}
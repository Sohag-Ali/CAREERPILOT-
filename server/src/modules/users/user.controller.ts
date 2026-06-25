
import httpStatus, { status } from "http-status";
import { Request, Response } from "express";
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";


const createUser = catchAsync(async (req: Request, res: Response) => {
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
}
);

export const userController = {
    createUser
}
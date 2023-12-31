import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

    // router.get("/checkauthenticantion",verifyToken, (req,res,next)=>{
    //     res.send("hello user, you are logged in ")
    // })

    // router.get("/checkuser/:id",verifyUser, (req,res,nfext)=>{
    //     res.send("hello user, you are logged in and you can ddelete your account")
    // })

    // router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
    //     res.send("hello admin, you are logged in and you can delete all accounts")
    // })


// UPDATE
router.put("/:id",verifyUser, updateUser);

// DELETE
router.delete("/:id",verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GETALL
router.get("/",verifyAdmin, getUsers);

export default router;

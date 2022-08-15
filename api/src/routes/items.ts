import { Response, Request, Router, NextFunction } from "express";
import searchItems from "../controllers";

const router = Router()

router.get('/', async(req: Request, res: Response, next: NextFunction) => {
    const { q } = req.query

    if(typeof q === "string") {
        const foundItems = await searchItems(q)
        foundItems && res.status(200).json(foundItems)
    }
})

export default router
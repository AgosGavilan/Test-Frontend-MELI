import { Response, Request, Router, NextFunction } from "express";
import { searchItems, idItem } from "../controllers";

const router = Router()

router.get('/', async(req: Request, res: Response, next: NextFunction) => {
    const { q } = req.query

    try {
        if(typeof q === "string") {
            const foundItems = await searchItems(q)
            foundItems && res.status(200).json(foundItems)
        }
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    let data = await idItem(id)

    try {
        data ? res.status(200).json(data) : res.send("error: no hay un producto con ese id")
    
    } catch(err) {
        next(err)
    }
})

export default router
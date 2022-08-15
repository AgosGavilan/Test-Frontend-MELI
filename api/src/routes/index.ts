import { Router } from "express";

import itemsRoutes from './items'

const router = Router()

router.use('/items', itemsRoutes)

export default router;
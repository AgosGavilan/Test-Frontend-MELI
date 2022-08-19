import { Router } from "express";

import itemsRoutes from './items'

const router = Router()

router.use('/api/items', itemsRoutes)

export default router;
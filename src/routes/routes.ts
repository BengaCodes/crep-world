import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from '../modules/middleware'

const router = Router()

// ! TRAINERS

router.get('/trainers', () => {})
router.get('/trainers/:id', () => {})
router.post('/trainers', body('name').isString(), body('price').isInt(), body('purchaseLocation').optional().isString(), body('description').isString(), handleInputErrors, () => {})
router.put('/trainers/:id', body('name').optional().isString(), body('price').optional().isInt(), body('purchaseLocation').optional().isString(), body('description').optional().isString(), handleInputErrors, () => {})
router.delete('/trainers/:id', () => {})


// ! Blog
router.get('/blogs', () => {})
router.get('/blogs/:id', () => {})
router.post('/blogs', body('title').isString().isLength({ min: 8 }), body('body').isString().isLength({ min: 50 }), handleInputErrors, () => {})
router.put('/blogs/:id', body('title').isString().isLength({ min: 8 }), body('body').isString().isLength({ min: 50 }), handleInputErrors, () => {})
router.delete('/blogs/:id', () => {})

export default router

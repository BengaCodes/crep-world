import { Router } from 'express'
import { body } from 'express-validator'
import { createTrainers, deleteTrainers, editTrainers, getAllTrainers, getATrainer, getUsersTrainers } from '../handlers/trainers/trainers'
import { protect } from '../modules/auth'
import { handleInputErrors } from '../modules/middleware'

const router = Router()

// ! TRAINERS

router.get('/trainers', getAllTrainers)
router.get('/trainers/users', protect, getUsersTrainers)
router.get('/trainers/:id', getATrainer)
router.post('/trainers', body('name').isString(), body('price').isFloat(), body('purchaseLocation').optional().isString(), body('description').isString(), handleInputErrors, protect, createTrainers)
router.put('/trainers/:id', body('name').optional().isString(), body('price').optional().isFloat(), body('purchaseLocation').optional().isString(), body('description').optional().isString(), handleInputErrors, protect, editTrainers)
router.delete('/trainers/:id', protect, deleteTrainers)


// ! Blog
router.get('/blogs', () => {})
router.get('/blogs/:id', () => {})
router.post('/blogs', body('title').isString().isLength({ min: 8 }), body('body').isString().isLength({ min: 50 }), handleInputErrors, () => {})
router.put('/blogs/:id', body('title').isString().isLength({ min: 8 }), body('body').isString().isLength({ min: 50 }), handleInputErrors, () => {})
router.delete('/blogs/:id', () => {})

export default router

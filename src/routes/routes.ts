import { Router } from 'express'

const router = Router()

// ! TRAINERS

router.get('/trainers', () => {})
router.get('/trainers/:id', () => {})
router.post('/trainers', () => {})
router.put('/trainers/:id', () => {})
router.delete('/trainers/:id', () => {})


// ! Blog
router.get('/blogs', () => {})
router.get('/blogs/:id', () => {})
router.post('/blogs', () => {})
router.put('/blogs/:id', () => {})
router.delete('/blogs/:id', () => {})

export default router

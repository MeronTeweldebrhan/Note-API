import express from 'express'
import { authMiddleware } from '../utils/auth.js'
import { createnote, getnotes,getNoteById,updateNote,deleteNote } from '../controllers/notecontroller.js'

const router =express.Router()

router.use(authMiddleware)

router.post('/newnote',createnote) /// works
router.get('/',getnotes)/// works
router.get('/:id', getNoteById);
router.put('/:id',updateNote)/// works
router.delete('/:id',deleteNote)





export default router
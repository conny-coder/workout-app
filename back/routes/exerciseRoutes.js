import express from "express"
import { createNewExerciseLog } from "../controllers/exercise/log/createController.js"
import { getExerciseLog } from "../controllers/exercise/log/getController.js"
import { updateExerciseLog, updateCompleteExerciseLog } from "../controllers/exercise/log/updateController.js"
import { createNewExercise, deleteExercise, getExercises, updateExercise } from "../controllers/exercise/mainController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router
  .route('/')
  .post(protect, createNewExercise)
  .get(protect, getExercises)
  .put(protect, updateExercise)
  .delete(protect, deleteExercise)

router
  .route('/log')
  .post(protect, createNewExerciseLog)
  .put(protect, updateExerciseLog)

router
  .route('/log/completed')
  .put(protect, updateCompleteExerciseLog)

router.route('/log/:id').get(protect, getExerciseLog)

export default router
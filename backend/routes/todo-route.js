const {Router} = require("express")
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/todo-controller")

const router = Router()


router.route("/").get(getTodo).post(saveTodo)

router.route("/:id").patch(updateTodo).delete(deleteTodo)



module.exports = router
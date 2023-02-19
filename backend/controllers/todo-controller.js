const TodoModel = require('../models/todo-model.js')

module.exports.getTodo = async (req, res) => {
    try{
        const task = await TodoModel.find({})
        res.status(200).send({task})

    }catch(err){
        res.status(500).send({msg: err})
    }
}

module.exports.saveTodo =  async (req, res) => {
    try{
        const task = TodoModel.create(req.body)
        res.status(201).json({task})

    }catch(err){
        res.status(500).json({msg: err})
    }

}

module.exports.updateTodo = async (req, res) =>{
    try{
        const {id: taskId} = req.params
        const task = await TodoModel.findOneAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidators: true
        })

        if(!task){
            res.status(404).json({msg: `No task with the id : ${taskId}`})
        }

        res.status(200).json({task})

    }catch(err){
        res.status(500).json({msg: err})

    }
 

}


module.exports.deleteTodo = async (req, res) =>{
    try{
        const {id: taskId} = req.params
        const task = await TodoModel.findOneAndDelete({_id: taskId})
        if(!task){
            res.status(404).json({msg: `No task with the id : ${taskId}`})
        }
        res.status(200).send({task})


    }catch(err){
        res.status(500).json({msg: err})
    }

}

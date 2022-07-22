const Task = require('../models/task')
const asyncwrap = require('../middleware/async')

const getalltask = asyncwrap(async(req, res) => {

    const tasks = await Task.find({})
    res.status(200).json({ tasks })


})

const createtask = async(req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const gettask = async(req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: 'no task with id :' + taskID })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updatetask = async(req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return res.status(404).json({ msg: 'no task with id :' + taskID })
        }


        res.status(200).json({ id: taskID, data: req.body })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const deletetask = async(req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: 'no task with id :' + taskID })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
module.exports = {
    getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask
}
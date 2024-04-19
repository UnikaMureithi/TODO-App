import React, { useEffect, useState } from 'react'
import { APIType, Task } from '../@types/types'
import { Box, Button, Checkbox, Chip, Typography } from '@mui/material'

const ViewTasks: React.FC<APIType> = ({API_URL}) => {

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(API_URL)
                const data = await response.json()
                setTasks(data)
            }
            catch(e){
                console.log(e)
            }
        }
        fetchData()

    },[API_URL])

    const handleDelete = async(id:number)=>{
        const deleteOption = {method: 'DELETE'}
        const reqUrl = `${API_URL}/${id}`
        const result = await fetch(reqUrl, deleteOption)
        const data = await result.json()
        setTasks(data)
    }

    return (
        <div>
            {tasks.map((task)=>(
                <Box key={task.id} display={'flex'} gap={3} pt={5}>
                    <Typography fontWeight={700}>Task {task.id}</Typography>
                    <Typography>{task.title}</Typography>
                    {
                    task.priority === 1 ? <Chip label="Urgent" sx={{backgroundColor:"#FF6A06", color:"#fff", width:"80px"}}/>:
                    task.priority === 2 ? <Chip label="Medium" sx={{backgroundColor:"#007A00", color:"#fff", width:"80px"}}/>:
                    <Chip label="Minor" sx={{backgroundColor:"#808080", color:"#fff", width:"80px"}}/>                    }
                    <Typography>{task.priority}</Typography>
                    <Typography>{task.createdAt}</Typography>
                    {task.done === true ? <Checkbox defaultChecked sx={{mt:-1}}/> : <Checkbox sx={{mt:-1}}/>}
                    <Typography>{task.doneAt}</Typography>
                    <Box display="flex" justifyContent="flex-end" flexGrow={1} gap={5}>
                        <Button variant='contained'>Edit</Button>
                        <Button variant='contained' style={{backgroundColor:"#C30010"}} onClick={()=>{handleDelete(task.id)}}>Delete</Button>
                    </Box>
                </Box>

            ))}
            <Button variant='contained' sx={{mt:5, py:2, px:4,backgroundColor:"#111111"}}>Create a new Task</Button>
        </div>
    )
}

export default ViewTasks
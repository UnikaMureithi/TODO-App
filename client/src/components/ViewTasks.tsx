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

    return (
        <div>
            {tasks.map((task)=>(
                <Box key={task.id} display={'flex'} gap={3} pt={5}>
                    <Typography fontWeight={700}>Task {task.id}</Typography>
                    <Typography>{task.title}</Typography>
                    {
                    task.priority === 1 ? <Chip label="Urgent" sx={{backgroundColor:"#FF6A06", color:"#fff"}}/>:
                    task.priority === 2 ? <Chip label="Medium" sx={{backgroundColor:"#007A00", color:"#fff"}}/>:
                    <Chip label="Minor" sx={{backgroundColor:"#808080", color:"#fff"}}/>
                    }
                    <Typography>{task.priority}</Typography>
                    <Typography>{task.createdAt}</Typography>
                    {task.done === true ? <Checkbox defaultChecked sx={{mt:-1}}/> : <Checkbox sx={{mt:-1}}/>}
                    <Typography>{task.doneAt}</Typography>
                    <Box display="flex" justifyContent="flex-end" flexGrow={1} gap={5}>
                        <Button variant='contained'>Edit</Button>
                        <Button variant='contained' style={{backgroundColor:"#C30010"}}>Delete</Button>
                    </Box>
                </Box>

            ))}
        </div>
    )
}

export default ViewTasks
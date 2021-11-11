import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [students, setStudents] = React.useState([])

    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student)

        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New student has been added.")
        })
    }

    React.useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result)
            }
            )
    }, [])

    function handleDelete(e, studentId) {
        e.preventDefault();
        console.log('student ID: ' + studentId)
        fetch("http://localhost:8080/student/delete/" + studentId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentId)
        }).then(() => {
            console.log("The student has been deleted.")
        })
    }

    return (
        <Container >

            <Paper elevation={5} style={paperStyle} >
                <h1 style={{ color: "darkblue" }}>Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="standard-basic" label="Student Adress" variant="standard" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button color="success" onClick={handleClick} variant="contained" >Submit</Button>
                </Box>
            </Paper>
            <h1 style={{ color: "darkblue" }}>Students</h1>

            <Paper elevation={3} style={paperStyle} >
                {students.map(student => (
                    <Paper elevation={3} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>

                        <AccountCircleIcon /><br />
                        <b>Id: </b>{student.id}<br />
                        <b>Name: </b>{student.name}<br />
                        <b>Address: </b>{student.address}<br />
                        <IconButton aria-label="delete" id="delete" onClick={(e) => { handleDelete(e, student.id) }}>
                            <DeleteIcon />
                        </IconButton>
                    </Paper>
                ))
                }
            </Paper>

        </Container>
    );
}
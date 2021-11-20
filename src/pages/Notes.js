
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'


export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
      fetch('http://localhost:8000/notes')
        .then( resp => resp.json())
        .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {    //async es para usar un await
      await fetch('http://localhost:8000/notes/' + id, {
        method: 'DELETE'
      })

      const newNotes = notes.filter(note => note.id != id)    //para dejar de mostrar la nota en la pantalla
      setNotes(newNotes)
  }

  return (
    <Container>
         {/* <Grid container>
            <Grid item xs={12} sm={6} md={3}>  xs(Extra-small) md{} significa que todas las pantallas de medium size para arriba van a ocupar 3 columnas del grid, el grid tiene en total 12 columnas
              <Paper>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>4</Paper>
            </Grid>

         </Grid> */}

         <Grid container spacing={3}>
                { notes.map(note => (        
                <Grid item key = {note.id} xs={12} md={6} lg={4}>
                  <NoteCard note = {note} handleDelete = {handleDelete} />
                </Grid>
                )) }
         </Grid>
    </Container>
  )
}

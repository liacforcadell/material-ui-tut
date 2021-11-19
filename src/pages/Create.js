import React from 'react'
import Typography from '@material-ui/core/Typography'
import  Button  from '@material-ui/core/Button'
import Container  from '@material-ui/core/Container'
//import ButtonGroup from '@material-ui/core/ButtonGroup'

export default function Create() {
  return (

      <Container>
      <Typography
        variant = "h6"  // (changes display on screen)
        component = "h2"  //cambia el tipo de componente
        gutterBottom      //margin true automatically
        color = "textSecondary"
        >
        Create a New Note
      </Typography>

      <Button
        onClick = { () => console.log('Submit') }
        type="submit"
        color= "secondary"
        variant="contained"
        //disableElevation
      >
        Submit
      </Button>


      {/* <Button type = "submit" color = "primary">
        Submit
      </Button>
      <Button type = "submit" color="secondary" variant = "outlined">
        Submit
      </Button> */}

      {/* <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

</Container>
  )
}

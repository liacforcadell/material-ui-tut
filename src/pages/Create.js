import React from 'react'
import Typography from '@material-ui/core/Typography'
import  Button  from '@material-ui/core/Button'
import Container  from '@material-ui/core/Container'
//import ButtonGroup from '@material-ui/core/ButtonGroup'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core'  //se debe importar asi cuando es una funcion y no un componente

//Para agregar propio CSS
//react Hook starts with use
const useStyles = makeStyles({
  // //Agrega una clase btn
  // btn: {
  //   fontSize : 60,    //las propiedades no tienen - sino Letras matusculas en el medio
  //   backgroundColor : 'violet',
  //   '&:hover': { //Aplica hover state
  //     backgroundColor: 'blue'
  //   }
  // },
  // title: {
  //   textDecoration : 'underline',
  //   marginButtton: 20
  // }


})


export default function Create() {
      
  //Usar Hook para CSS
      const classes = useStyles()

  return (
      <Container>
      <Typography
        className = {classes.title}
        variant = "h6"  // (changes display on screen)
        component = "h2"  //cambia el tipo de componente
        gutterBottom      //margin true automatically
        color = "textSecondary"
        >
        Create a New Note
      </Typography>

      <Button
        className = {classes.btn} //Aplicar class de CSS
        onClick = { () => console.log('Submit') }
        type="submit"
        color= "secondary"
        variant="contained"
        //disableElevation
        //startIcon = {<SendIcon/>}
        endIcon = {<KeyboardArrowRightIcon />}
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

      {/* Icons */}
      {/* <br/>
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color = "secondary" fontSize = "large"/>
      <AcUnitOutlinedIcon color = "secondary" fontSize = "small"/>
      <AcUnitOutlinedIcon color = "action" fontSize = "small"/>
      <AcUnitOutlinedIcon color = "error" fontSize = "small"/>
      <AcUnitOutlinedIcon color = "disabled" fontSize = "small"/> */}



</Container>
  )
}

import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import  Button  from '@material-ui/core/Button'
import Container  from '@material-ui/core/Container'
//import ButtonGroup from '@material-ui/core/ButtonGroup'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core'  //se debe importar asi cuando es una funcion y no un componente
import  TextField  from '@material-ui/core/TextField';


//Para agregar propio CSS
//react Hook starts with use
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }


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

  //Guardar caracteres ingresados en la pagina en un estado
      const [title, setTitle] = useState('')
      const [details, setDetails] = useState('')

  //HandleError
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)


  //Prevent default action
      const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
          setTitleError(true)
        }
        if (details == '') {
          setDetailsError(true)
        }

        
        if(title && details) {
          console.log(title, details)
        }

      }

  return (
      <Container>
      <Typography
        //className = {classes.title}
        variant = "h6"  // (changes display on screen)
        component = "h2"  //cambia el tipo de componente
        gutterBottom      //margin true automatically
        color = "textSecondary"
        >
        Create a New Note
      </Typography>



        <form noValidate autoComplete='off' onSubmit = {handleSubmit}>

            <TextField
              onChange = { (e) => setTitle(e.target.value) }  //guardar caracteres ingresados
              className= {classes.field}
              label="Agregar Nombre" 
              color="primary"
              variant='outlined'
              fullWidth
              required
              error = { titleError } //Mostrar mensaje de error
            />

            <TextField
              onChange = { (e) => setDetails(e.target.value) }
              className= {classes.field}
              label="Detalle" 
              color="primary"
              variant='outlined'
              multiline //textfield con varias lineas
              rows = {4}  // se debe especificar cuantas filas va a tener
              fullWidth
              required
              error = { detailsError }
            />


            <Button
              className = {classes.btn} //Aplicar class de CSS
              //onClick = { () => console.log('Submit') }
              type="submit"
              color= "secondary"
              variant="contained"
              //disableElevation
              //startIcon = {<SendIcon/>}
              endIcon = {<KeyboardArrowRightIcon />}
            >
              Submit
          </Button>


        </form>
      


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

<p>{ title }</p>
<p>{ details }</p>

</Container>
  )
}

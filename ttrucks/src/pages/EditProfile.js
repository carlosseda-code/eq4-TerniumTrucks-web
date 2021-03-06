import React from "react"
import Input from '../components/Input';
import Form from '../components/Form';
import { Button } from 'reactstrap';
class EditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
        this.input1 = React.createRef()
        this.input2 = React.createRef()
        this.input3 = React.createRef()
        this.input4 = React.createRef()
        this.input5 = React.createRef()
        this.input6 = React.createRef()
        this.input7 = React.createRef()
    }
  
  clearValues = () =>{
     this.input1.current.setValue("")
     this.input2.current.setValue("")
     this.input3.current.setValue("")
     this.input4.current.setValue("")
  }
 
  render(){
  return (
    <div>
        <h1 className="titleProfile">Editar perfil</h1>
        <Form className="formContainer">
            <Input ref={this.input1} label={"Usuario"} />
            <Input ref={this.input2} label={"Nombre"} />
            <Input ref={this.input3} label={"Correo electrónico"} />
            <Input fieldtype={"date"} ref={this.input4} label={"Fecha de nacimiento"} />
            <Input fieldtype={"password"} ref={this.input5} label={"Cambiar contraseña"} />
            <div className="centerButtons2">
                <Button color="secondary" onClick={this.saveValue}>Atrás</Button>
                <Button style={{margin:"0px 20px 0px 20px"}} color="secondary" onClick = {this.saveValue}>Guardar cambios</Button>
            </div>
        </Form>
        
    </div>
  );
}
}

export default EditProfile;
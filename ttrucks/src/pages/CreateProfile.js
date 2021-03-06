import React from "react"
import Input from '../components/Input';
import Form from '../components/Form';
import { Button } from 'reactstrap';
class CreateProfile extends React.Component{
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
        <h1 className="titleProfile">Crear cuenta</h1>
        <Form className="formContainer">
            <div style={{width:"100%",marginBottom:"200px"}}>
                <div className="containerLeft">
                    <Input ref={this.input1} label={"Usuario"} />
                    <Input fieldtype={"password"} ref={this.input2} label={"Contraseña"} />
                    <Input fieldtype={"password"} ref={this.input3} label={"Repetir contraseña"} />
                </div>
                <div className="containerRight">
            <Input ref={this.input4} label={"Nombre"} />
            <Input ref={this.input5} label={"Apellido"} />
            <Input ref={this.input6} label={"Correo electrónico"} />
            <Input fieldtype={"date"} ref={this.input7} label={"Fecha de nacimiento"}/>
                </div>
            </div>
            <div className="centerButtons">
                <Button color="secondary" onClick={this.saveValue}>Atrás</Button>
                <Button style={{margin:"0px 20px 0px 20px"}} color="secondary" onClick = {this.saveValue}>Continuar</Button>
            </div>
        </Form>
        
    </div>
  );
}
}

export default CreateProfile;
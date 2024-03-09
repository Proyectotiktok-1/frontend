import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Label from "./Components/Label"
import axios from 'axios';
import InputPassword from  "./Components/InputPassword.jsx"
function App() {
const singUpUser = () => {
  const userData = {
    "username": "pepito123",
    "password": "7Y87YH8GG6Y8",
    "email": "pepito123@gmail.com"
  }
  axios.post('https://backend-dev-xbmf.3.us-1.fl0.io/api/auth/signup', userData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
   }  
  return (
    <div>
      
      <Label texto="Regístrate ahora"> </Label>

      <Label texto="Correo Electrónico:"> </Label>
      <Input placeholder="Felix@gmail.com"> </Input>

      <Label texto="Nombre de usuario:"> </Label>
      <Input placeholder="Usuario 123"> </Input>

      <Label texto="Contraseña:"> </Label>
      <InputPassword placeholder="**********"> </InputPassword>

      <Label texto="Confirma la contraseña:"> </Label>
      <InputPassword placeholder="**********"> </InputPassword>
      <Button singUpUser={singUpUser} > </Button>
    </div>
  );
}

export default App;

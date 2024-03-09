import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Label from "./Components/Label"
import axios from 'axios';
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
      <Label  texto={"Registrate Ahora"}> </Label>
      <Input> </Input>
      <Button singUpUser={singUpUser} > </Button>
    </div>
  );
}

export default App;

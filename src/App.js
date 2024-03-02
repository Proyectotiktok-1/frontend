import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Label from "./Components/Label";
import InputPassword from  "./Components/InputPassword.jsx"
function App() {
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
      <Button> </Button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Input(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <input
        placeholder={props.placeholder}
        type={showPassword ? "text" : "password"}
      />
      <button onClick={togglePasswordVisibility}>
        {showPassword ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}
export default Input;

import { ReactNode, useState } from "react";

// Versión alternativa con colores como valores CSS directos

interface CustomButtonProps {
   text?: string;
   onClick?: () => void;
   width?: string;
   height?: string;
   fontSize?: string;
   fontColor?: string;
   icon?: ReactNode;
   backgroundColor?: string;  // Ahora acepta valores CSS directos como "#3B82F6"
   hoverColor?: string;       // Ahora acepta valores CSS directos como "#2563EB"
   disabled?: boolean;
   type?: "button" | "submit" | "reset";
}
 
 const ControllerCustomButton: React.FC<CustomButtonProps> = ({
   text,
   onClick,
   width = "auto",
   height = "36px",
   fontSize = "14px",
   fontColor = "white",
   icon,
   backgroundColor = "#3B82F6", // Azul por defecto
   hoverColor = "#2563EB",      // Azul más oscuro por defecto
   disabled = false,
   type = "button",
 }) => {
   // Estado para manejar el hover
   const [isHover, setIsHover] = useState(false);
 
   // Estilo inline para todas las propiedades
   const buttonStyle = {
     width,
     height,
     fontSize,
     color: fontColor,
     backgroundColor: disabled ? "#D1D5DB" : isHover ? hoverColor : backgroundColor,
     cursor: disabled ? "not-allowed" : "pointer",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "0.375rem", // equivalente a rounded-md
     transition: "background-color 200ms",
   };
 
   return (
     <button
       type={type}
       onClick={onClick}
       disabled={disabled}
       className="w-full flex justify-center items-center"
       style={buttonStyle}
       onMouseEnter={() => setIsHover(true)}
       onMouseLeave={() => setIsHover(false)}
     >
       {icon && <span style={{ marginRight: text ? "0.5rem" : "0" }}>{icon}</span>}
       {text && <span>{text}</span>}
     </button>
   );
 };

 export default ControllerCustomButton;
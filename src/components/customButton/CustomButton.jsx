const CustomButton = ({ texto, counter, setCounter }) => {
    
    const sumar = () => {
      setCounter(counter + 1)
    }
  
    const restar = () =>{
      setCounter(counter - 1)
    }
  
    const vaciar = () => {
      setCounter (0)
    }
  
      return (
        <>
        <button onClick={sumar}>Sumar{texto}</button>
        <button onClick={restar}>Restar</button>
        <br />
        <button onClick={vaciar}>Vaciar</button>
        </>
      );
  };
  
  export default CustomButton;
  
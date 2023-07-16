const randomDescuento = () => {

    const descuento = ["10 % de descuento", "15 % de descuento", "20 % de descuento", "25 % de descuento"] 

    function generarNumero() {
        return Math.floor(Math.random() * 4);
      }
      
      var numeroAleatorio = generarNumero();
      return(descuento[numeroAleatorio])
      
  };
  
 randomDescuento()

  export default randomDescuento;
  
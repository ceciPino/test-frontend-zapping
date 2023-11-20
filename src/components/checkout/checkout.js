export const checkout = () => {
    const draw = document.createElement('div');
    const templateCheckout = `
      <header>
        <h1>Checkout</h1>
        <p>ola soy un logo</p>
        <a href="">ayuaaa</a>
      </header>
      <div>
        <p>esto es una imagen de un ticket bonito</p>
      </div>
      <div>
        <h3>esto es un texto simpatico</h3>
        <p> este es otro texto mas chiquititi </p>
      </div>
      <div>
        <button id="botonCheckout"> esta es el area del botoncete</button>
      </div>
    `;
  
    draw.innerHTML = templateCheckout;
  
    const buttonCheckout = draw.querySelector('#botonCheckout');
    buttonCheckout.addEventListener('click', () => {
      console.log("holaaa checkout");
      window.location.hash = '#/loader';
    });
    return draw
  }
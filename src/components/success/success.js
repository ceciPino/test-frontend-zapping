export const success = () => {
    const draw = document.createElement('div');
    const templateSuccess = `
      <header>
        <h1>Succes</h1>
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
        <button id="botonSuccess"> esta es el area del botoncete</button>
      </div>
    `;
  
    draw.innerHTML = templateSuccess;
  
    const buttonSuccess= draw.querySelector('#botonSuccess');
    buttonSuccess.addEventListener('click', () => {
      console.log("holaaa success");
      window.location.hash = '#/checkout';
    });
    return draw
  };
export const loader = () => {
    const draw = document.createElement('div');
    const templateLoader = `
      <header>
        <h1 class='text'>Loader</h1>
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
        <button id="botonLoader"> esta es el area del botoncete</button>
      </div>
    `;
    
    draw.innerHTML = templateLoader;
    if (window.location.hash === '#/loader') {
      setTimeout(function() {
        window.location.hash = '#/succes';
      }, 10000);
    }
    return draw
  }
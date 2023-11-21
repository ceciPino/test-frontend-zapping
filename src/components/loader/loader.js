export const loader = () => {
    const draw = document.createElement('div');
    const templateLoader = `
    <main class="loader-container">
    <div class="icon-container">
        <svg width="194" height="186" viewBox="0 0 194 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Component 2">
            <circle id="Ellipse 107" cx="97.0001" cy="93" r="90.75" stroke="url(#paint0_linear_1_1845)" stroke-width="4.5"/>
            <path id="Ellipse 108" d="M182.908 62.2633C188.175 77.5604 189.361 93.967 186.347 109.862" stroke="url(#paint1_linear_1_1845)" stroke-width="4.5"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1_1845" x1="4.00012" y1="93" x2="196.226" y2="116.809" gradientUnits="userSpaceOnUse">
            <stop offset="0.314762" stop-color="#EF426F"/>
            <stop offset="1" stop-color="#F0F179"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1_1845" x1="183" y1="60" x2="186.5" y2="108" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="0.64008" stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>                
    </div>
    <div class="loader-text1">
        <p>Estamos preparando tu plan</p>
    </div>
    <div class="loader-animated-text">
        Validando con Elon Musk
    </div>
    `;
    
    draw.innerHTML = templateLoader;
    if (window.location.hash === '#/loader') {
      setTimeout(function() {
        window.location.hash = '#/succes';
      }, 5000);
    }
    return draw
  }
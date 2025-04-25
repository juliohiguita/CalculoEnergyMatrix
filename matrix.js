const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del lienzo al tamaño de la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas); // Redimensiona el canvas al cambiar el tamaño de la ventana
resizeCanvas(); // Llama a la función al cargar la página

const fontSize = 16; // Tamaño de la fuente
const columns = canvas.width / fontSize; // Número de columnas
const drops = Array(Math.floor(columns)).fill(1); // Posición inicial de las gotas

const characters = 'caremondacarepolla'; // Caracteres estilo Matrix
const charArray = characters.split('');

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fondo negro con transparencia
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Color verde
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, x) => {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[x] = 0; // Reinicia la gota al llegar al final
        }

        drops[x]++;
    });

    requestAnimationFrame(drawMatrix);
}

drawMatrix();

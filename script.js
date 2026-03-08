const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => {
  if (!element.classList.contains('visible')) {
    observer.observe(element);
  }
});

const accessForm = document.getElementById('accessForm');

if (accessForm) {
  accessForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const motivo = document.getElementById('motivo').value.trim();
    const valor = document.getElementById('valor').value.trim();
    const compromiso = document.getElementById('compromiso').value.trim();

    const subject = encodeURIComponent('Solicitud de acceso a NÚCLEO');
    const body = encodeURIComponent(
`Nueva solicitud de acceso a NÚCLEO

Nombre: ${nombre}
Email: ${email}

¿Por qué quiere entrar?
${motivo}

¿Qué le diferencia del resto?
${valor}

¿Qué está dispuesto a sostener para formar parte?
${compromiso}`
    );

    window.location.href = `mailto:josebagutierrez123@gmail.com?subject=${subject}&body=${body}`;
  });
}

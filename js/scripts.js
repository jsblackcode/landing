document.addEventListener('DOMContentLoaded', () => {
  // 1. Año dinámico en el pie de página
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Cotizador interactivo hacia WhatsApp
  const btnWhatsapp = document.getElementById('btnWhatsappQuote');

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', () => {
      // Reemplazá con tu número con código de área (ejemplo: 5491123456789)
      const miNumeroWhatsapp = '5491154110663'; 
      
      // Obtener el proyecto base seleccionado
      const baseSeleccionada = document.querySelector('input[name="baseProject"]:checked');
      const proyectoBase = baseSeleccionada ? baseSeleccionada.value : 'Landing Page Comercial';

      // Obtener adicionales tildados
      const extras = [];
      const addDominio = document.getElementById('addDominioEmail');
      const addQr = document.getElementById('addQrPdf');
      const nombreCliente = document.getElementById('leadName')?.value.trim();

      if (addDominio && addDominio.checked) {
        extras.push('• Gestión de Dominio .com.ar + Correo corporativo');
      }
      if (addQr && addQr.checked) {
        extras.push('• QR Dinámico / Tarjeta Digital Bio Link');
      }

      // Estructurar el mensaje predeterminado
      let saludoInicial = '¡Hola gente de JS Black Code!';
      if (nombreCliente) {
        saludoInicial = `¡Hola gente de JS Black Code! Mi nombre es *${nombreCliente}*.`;
      }
      
      let mensaje = `${saludoInicial}\nEstuve armando una propuesta desde su sitio web:\n\n*Proyecto Base:* ${proyectoBase}`;

      if (extras.length > 0) {
        mensaje += `\n\n*Módulos Adicionales:*\n${extras.join('\n')}`;
      }

      mensaje += `\n\n¿Podemos coordinar una estimación formal de tiempos y presupuesto?`;
      
      // Abrir enlace directo a la API de WhatsApp
      const urlWhatsapp = `https://wa.me/${miNumeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
      window.open(urlWhatsapp, '_blank');
    });
  }

  // 3. Smooth scroll seguro para todos los enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
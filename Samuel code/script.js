function adjustOverflow(selector) {
    // Selecciona todos los elementos que coinciden con el selector proporcionado
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
        // Verificar si el contenido se desborda
        const isOverflowing =
            element.scrollHeight > element.clientHeight ||
            element.scrollWidth > element.clientWidth;

        if (isOverflowing) {
            // Si el contenido se desborda, aplicar overflow: clip
            element.style.overflow = 'clip';
            element.style.overflowClipMargin = 'content-box';
        } else {
            element.style.overflow = 'visible';
        }
    });
}

adjustOverflow('.product-card');

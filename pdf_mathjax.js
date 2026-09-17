window.MkDocsExporter = window.MkDocsExporter || {};

window.MkDocsExporter.render = async () => {
  const timeout = 15000;
  const started = Date.now();

  // MathJax es carrega des d'extra_javascript. Paged.js pot començar a
  // paginar abans que MathJax hagi acabat de convertir les fórmules.
  // Esperam explícitament que MathJax estigui inicialitzat i hagi acabat
  // el primer typesetting abans de maquetar el PDF.
  while (
    !window.MathJax ||
    !window.MathJax.startup ||
    !window.MathJax.startup.promise
  ) {
    if (Date.now() - started > timeout) {
      console.warn('[mkdocs-exporter] MathJax no ha estat disponible dins el temps d’espera.');
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  await window.MathJax.startup.promise;

  // Esperam també les fonts abans que Paged.js calculi amplades i salts.
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
};

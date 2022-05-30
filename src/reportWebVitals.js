const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


// ** EXPLANATIONS :
// CLS = 'Cumulative Layout Shift' ->
// 'Le changement de disposition cumulé (CLS) 
// est la somme des scores de changement de disposition individuels 
// pour chaque changement d'élément inattendu pendant le processus de rendu. 
// Imaginez que vous naviguez vers un article et essayez de cliquer sur un lien 
// avant la fin du chargement de la page. Avant même que votre curseur n'y arrive, 
// le lien peut s'être déplacé vers le bas en raison d'un rendu d'image. 
// Plutôt que d'utiliser la durée pour ce Web Vital, le score CLS représente 
// le degré de changements perturbateurs et visuellement instables.'

// FID = 'First Input Delay' ->
// 'measures the response time when the
// user tries to interact with the viewport'

// FCP = 'First Contentful Paint' -> 
// 'measures the amount of time the first 
// content takes to render in the viewport'

// LCP = 'Largest Contentful Paint' ->
// 'measures the render time for the largest 
// content to appear in the viewport'
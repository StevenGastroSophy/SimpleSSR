const getTitleByCode = (code) => {
  switch (code) {
    case 'art20200616001': return '建立 Express server';
    case 'art20200616002': return '改裝成 React SPA server';
    case 'art20200616003': return '加上 React router';
    case 'art20200616004': return '改裝成 React SSR server';
    case 'art20200616005': return '總結';
    default: return '前情提要'
  }
}

export default getTitleByCode;
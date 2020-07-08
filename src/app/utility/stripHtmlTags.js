const stripHtmlTags = (str) => {
  if ((str === null) || (str === '')) {
    return false;
  }
  const result = str.toString();
  return result.replace(/<[^>]*>/g, '');
}

export default stripHtmlTags;
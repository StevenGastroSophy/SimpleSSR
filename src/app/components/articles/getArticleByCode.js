import art20200616000 from './js/art20200616000';
import art20200616001 from './js/art20200616001';
import art20200616002 from './js/art20200616002';
import art20200616003 from './js/art20200616003';
import art20200616004 from './js/art20200616004';
import art20200616005 from './js/art20200616005';

const getArticleByCode = (code) => {
  switch (code) {
    case 'art20200616001': return art20200616001;
    case 'art20200616002': return art20200616002;
    case 'art20200616003': return art20200616003;
    case 'art20200616004': return art20200616004;
    case 'art20200616005': return art20200616005;
    default: return art20200616000
  }
}

export default getArticleByCode;

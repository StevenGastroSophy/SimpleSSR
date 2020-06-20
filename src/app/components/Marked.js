import React from 'react';
import marked from 'marked';

const Marked = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: marked(text) }} className="marked" />
);

export default Marked;
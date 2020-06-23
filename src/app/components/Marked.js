import React from 'react';
import marked from 'marked';

const Marked = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: marked(text) }} className="marked darkMarkdown" />
);

export default Marked;
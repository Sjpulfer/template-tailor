import { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import './App.css';

builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY);

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', { url: window.location.pathname })
      .promise()
      .then(setContent);
  }, []);

  return (
    <>
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <h2>No Builder.io content found for this route</h2>
      )}
    </>
  );
}

export default App;
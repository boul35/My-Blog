'use client'; // Important: Mark this as a client component
import React, { useEffect, useRef } from 'react';

// Define the type for the props
interface CommentsProps {
  slug: string;
}

const Comments: React.FC<CommentsProps> = ({ slug }) => {
  const commentContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentContainer.current) {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'boul35/my-blog');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('theme', 'github-light');
      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('async', 'true');

      script.onload = () => {
        console.log('Utterances script loaded');
      };

      commentContainer.current.innerHTML = ''; // Clear previous content
      commentContainer.current.appendChild(script);
    }
  }, []);

  return <div ref={commentContainer} />;
};

export default Comments;

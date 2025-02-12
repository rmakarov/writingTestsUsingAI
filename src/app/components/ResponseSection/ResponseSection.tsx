import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

type ResponseSectionType = {
    aiResponse: string;
}

const ResponseSection: React.FC<ResponseSectionType> = ({aiResponse = ''}) => {
  const [aiText, setAiText] = useState('');

  useEffect(() => {
      setAiText(aiResponse);
  }, [aiResponse, setAiText]);

  return (
      <Container className="p-4">
          <textarea className="aiTextArea"/>
      </Container>
  )
}

export default ResponseSection;



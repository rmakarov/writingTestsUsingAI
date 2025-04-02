import React, {useRef} from 'react';
import { Button, Container } from 'react-bootstrap';
import { testChatGpt } from '../../openAI/openAiUtils'
import { generateText } from '../../deepinfra/deepinfraUtils';

type RequestSectionType = {
    onChange: (response: string) => void;
}

const RequestSection: React.FC<RequestSectionType> = ({ onChange }) => {

    const textAreaRef = useRef(null);
    const aiRequestHandler = React.useCallback(() => {
        console.log('TextArea value', textAreaRef.current.value);
        const responseText = textAreaRef.current.value || '';
        const response = generateText(responseText);
        response.then((result) => {
            console.log('result: ', result);
        })
    }, [generateText]);

    return (
        <Container className="p-4">
            <textarea ref={textAreaRef} className="aiTextArea" />
            <Container className="pt-2">
                <Button onClick={aiRequestHandler}>
                    Generate
                </Button>
            </Container>
        </Container>
    )
}

export default RequestSection;
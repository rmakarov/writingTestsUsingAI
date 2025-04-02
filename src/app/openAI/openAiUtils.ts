import OpenAI from 'openai';

const OPEN_AI_KEY = '7a0807cb7a2c4d41a84c8055b6b7b743';
const baseURL = 'https://api.aimlapi.com/v1';

export const client = new OpenAI({
    apiKey: OPEN_AI_KEY,
    baseURL,
    dangerouslyAllowBrowser: true
});

const GPT_4o_MODEL = 'gpt-4o';
const PHIND_CodeLlama_MODEL = 'Phind/Phind-CodeLlama-34B-v2'

export async function testChatGpt(content) {
    const chatCompletion = await client.chat.completions.create({
        model: GPT_4o_MODEL,
        messages: [{ role: 'user', content }],
    });

    const response = chatCompletion.choices[0]?.message?.content;
    console.log('response: ', response);
    return response;
}


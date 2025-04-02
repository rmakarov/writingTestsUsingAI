import { TextGeneration } from 'deepinfra';

const DEEPINFRA_API_KEY = 'm0zfTC7N57VbM1m2EUEeJ2kKb8ihfayw';
const MODEL_URL = 'https://api.deepinfra.com/v1/inference/meta-llama/Meta-Llama-3-8B-Instruct';

export async function generateText(content) {
    const client = new TextGeneration(MODEL_URL, DEEPINFRA_API_KEY);
    const res = await client.generate({
        "input": `<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\n${content}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n`,
        "stop": [
            "<|eot_id|>"
        ]
    });

    console.log(res.results[0].generated_text);
    console.log(res.inference_status.tokens_input, res.inference_status.tokens_generated)
    return res.results[0].generated_text;
}

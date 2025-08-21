const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;            // ex: https://my-foundry.openai.azure.com
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = process.env.AZURE_OPENAI_API_VERSION;       // 2024-07-01-preview
const deployment = process.env.AZURE_OPENAI_TTS_DEPLOYMENT;    // TTS deployment name
const voice = process.env.AZURE_OPENAI_VOICE || "alloy";
const format = process.env.AZURE_OPENAI_AUDIO_FORMAT || "wav";

/**
 * Generate speech using Azure AI Foundry/Azure OpenAI TTS deployment
 * @param {string} text - input text
 * @param {string} outputFile - output file path
 */
async function textToSpeech(text, outputFile) {
    if (!endpoint || !apiKey || !apiVersion || !deployment) {
        throw new Error("Missing one or more env vars: AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, AZURE_OPENAI_API_VERSION, AZURE_OPENAI_TTS_DEPLOYMENT");
    }

    const url = `${endpoint}/openai/deployments/${encodeURIComponent(deployment)}/audio/speech?api-version=${encodeURIComponent(apiVersion)}`;
    const body = {
        input: text,
        voice,        // must be voice supported by your deployed TTS model
        format        // file format (mp3, wav)
    };

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "api-key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(`TTS request failed: ${res.status} ${res.statusText} ${errText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(path.resolve(outputFile), Buffer.from(arrayBuffer));
    console.log(`Audio written to ${outputFile}`);
}

// Example usage
textToSpeech("Where am I?", "example.wav").catch(console.error);

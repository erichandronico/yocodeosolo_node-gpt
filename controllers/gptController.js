const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");

const getPromptResponse = async ( req, res=response ) => {

    try {
        const { prompt } = req.body;

        const apiKey = process.env.OPENAIKEY

        console.log(prompt, apiKey)

        const configuration = new Configuration({apiKey});
        const openai        = new OpenAIApi(configuration);
        const model        = 'gpt-3.5-turbo';
        const messages = [
            {
                role: 'user',
                content: prompt
            }
        ];

        const gptResponse = await openai.createChatCompletion({ model, messages })

        console.log('Choices', gptResponse.data.choices )

        // const msg = `El prompt ${prompt}`

        res.send({ok: true, response: gptResponse.data.choices?.at(0)?.message })

    } catch (error) {
        
        console.log(error)
        res.send({ok: false, msg: 'ocurrió un error'})
    }
};

module.exports = {
    getPromptResponse
}
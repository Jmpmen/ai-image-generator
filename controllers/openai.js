const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config({ path: "./config/.env" });

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    getIndex: async (req, res) => {
        try {
            res.render("index.ejs", { image: '', msg: '' });
        } catch (error) {
            console.log(error);
        }
    },
    generateImage: async (req, res) => {
        try {
            const image = await openai.createImage({
                prompt: req.body.userInput,
                n: 1,
                size: req.body.size,
            });
            const imageUrl = image.data.data[0].url
            res.render("index.ejs", { image: imageUrl, msg: '' });
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
              } else {
                console.log(error.message);
              }
            res.render("index.ejs", { image: '', msg: error.response.data.error.message });
        }
    }
}
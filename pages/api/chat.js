export default async function handler(req, res) {
    if (req.method === 'POST') {
        let userMessage = req.body.message;

        // Check if userMessage is empty, null, or contains only whitespace
        if (!userMessage || userMessage.trim() === '') {
            userMessage = "Ask an oncology question";
        }

        try {
            // Structuring the prompt for a conversational context
            const prompt = `Answer the following question: ${userMessage}`;
            const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Use the environment variable here
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 100,
                    temperature: 0.6 // Adjust as needed for the desired level of creativity
                })
            });

            const data = await response.json();
            console.log(data); // Log the response for debugging

            if (data.choices && data.choices.length > 0) {
                // Send back the AI's response
                res.status(200).json({ reply: data.choices[0].text.trim() });
            } else {
                // Handle no choices in response
                res.status(200).json({ reply: "Thank you for trialing OncologyChat! Due to high question volume, the API rate is at it's cap. Please retry your question later." });
            }
        } catch (error) {
            console.error('OpenAI API error:', error);
            res.status(500).json({ reply: "An error occurred while processing your request." });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
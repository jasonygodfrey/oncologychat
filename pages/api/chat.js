// pages/api/chat.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let userMessage = req.body.message;

        // Check if userMessage is empty, null, or contains only whitespace
        if (!userMessage || userMessage.trim() === '') {
            userMessage = "Ask an oncology question";
        }
        try {
            const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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`
                },
                body: JSON.stringify({
                    prompt: userMessage,
                    max_tokens: 150 // or another number of tokens you prefer
                    // You can include other parameters as needed
                })
            });

            const data = await response.json();
        // Check if userMessage is empty, if so, set a default message
        console.log(data);

            if (data.choices && data.choices.length > 0) {
                // Send back the AI's response
                res.status(200).json({ reply: data.choices[0].text });
            } else {
                // Handle no choices in response
                res.status(200).json({ reply: "I'm sorry, I couldn't generate a response." });
            }
        } catch (error) {
            console.error('OpenAI API error:', error);
            res.status(500).json({ reply: "An error occurred while processing your request." });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

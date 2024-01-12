import { chatCompletions } from "../lib/openIaAPI.js";

const OpenIAResponse = jest.fn().mockResolvedValueOnce({choice:[{message :'foo'}]});

global.fetch = jest.fn(() => Promise.resolve({
    json: OpenIAResponse

}));

describe('Endpoint de openIA', () => {
    it ('La API es llamada con los datos adecuados'), () =>{
     const messages =[{
        role: "user",
        content: "foo",
      }]; 
      chatCompletions = ("1234567", messages);
      expect (global.fetch).toBeCallendWith("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer 1234567`,
            },
                body: JSON.stringify({
                model: "gpt-3.5-turbo-1106",
                messages,
                
        })
    });
        
});
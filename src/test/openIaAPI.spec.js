import { chatCompletions } from "../lib/openIaAPI.js";

const OpenIAResponse = jest.fn();

global.fetch = jest.fn(() => Promise.resolve({
    json: OpenIAResponse

}));

describe('Endpoint de openIA', () => {
    it ('La API es llamada con los datos adecuados'), () =>{
     
     OpenIAResponse.mockResolvedValueOnce({choice:[{message :'foo'}]});
        const body =[{
            model: "gpt-3.5-turbo-1106",
            messages:{
            role: "user",
        content: "foo"}
      }]; 
     
      
      chatCompletions ("1234567", body);
      expect (global.fetch).toBeCallendWith("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer 1234567`,
            },
                body: JSON.stringify(body)
    });
} 

it ('El edpoint responde de manera correcta', () => {
    const response ={
        "choise": [
            {
                "message":{
                    "role": "assistant",
                    "content": "¡Hola!"
                }
            }]
    };
   
OpenIAResponse.mockResolvedValueOnce(response);
return chatCompletions("1234567", [{
    role: "user",
    content: "foo",
  }]).then ((resolved) =>{
    expect(resolved).toBe(response);
  });
});


});
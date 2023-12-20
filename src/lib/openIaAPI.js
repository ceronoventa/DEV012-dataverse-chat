export const chatCompletions = (APIKEY, data) => {
 
return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${APIKEY}`,
    },
        body: JSON.stringify(data)
})
}
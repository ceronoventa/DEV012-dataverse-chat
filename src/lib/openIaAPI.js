export const chatCompletions = (KEY, data) => {
  // const bodyRequest ={
  //     model: "gpt-3.5-turbo-1106",
  //     messages: data,
  // }

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
};

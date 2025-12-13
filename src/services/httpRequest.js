const API_URL = import.meta.env.VITE_API_URL;
function getHeaders(body)
{
  let contentLength = 0;
  console.log(body)
  if(body != null )
  {
      const jsonBody = JSON.stringify(body);
      contentLength = new Blob([jsonBody]).size; 
  }

    const headers= { 'Content-Type' : 'application/json; charset=utf-8',
      "Host": new URL(API_URL).host, 
      "Content-Length" : contentLength,
      "Access-Control-Allow-Origin": "*",
      "Accept": "*",
      "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS", 
      'Access-Control-Allow-Headers' :  'Origin, X-Requested-With'
    };
    return headers; 
}
export async function authentication(body) {
  console.log(getHeaders(body))
  const response = await fetch(`${API_URL}/User/Authentication`, {
    method: "POST",
    headers:getHeaders(body), 
    body: JSON.stringify(body)

  });
  

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  return await response.json();
}

export async function getBooks(page) {
  const response = await fetch(`${API_URL}/Home/GetBooks?page=${page}`, {
    method: "GET",
    headers:getHeaders(), 

  });
  return await response.json();
}
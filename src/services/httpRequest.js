const API_URL = import.meta.env.VITE_API_URL;

export async function authentication(body) {
  const response = await fetch(`${API_URL}/User/Authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  return await response.json();
}
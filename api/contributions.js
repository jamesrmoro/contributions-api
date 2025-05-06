export default async function handler(req, res) {
  const username = req.query.user;

  if (!username) {
    return res.status(400).json({ error: "Usuário não informado" });
  }

  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao buscar contribuições" });
  }
}

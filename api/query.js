module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);
  res.json({ body: 'success', res: [username, password] });
};

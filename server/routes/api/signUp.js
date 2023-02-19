
module.exports =  (req,res) => {
    const users = [];

    app.post("/signup", async (req, res) => {
      try {
        const { username, email, password, role } = req.body;
    
        // Check if user already exists
        const userExists = users.find(
          (user) => user.email === email || user.username === username
        );
    
        if (userExists) {
          return res.status(409).json({ error: "User already exists" });
        }
    
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create user
        const user = {
          username,
          email,
          password: hashedPassword,
          role,
        };
    
        // Add user to list of users
        users.push(user);
    
        // Create and sign JWT
        const token = jwt.sign({ email, role }, "secret");
    
        return res.status(201).json({ message: "User created", token });
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    });
    
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    
}

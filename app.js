import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const posts = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));

// Home Page Logic is down here >-------

app.get("/", (req, res) => {
  res.render("index", { posts });
});

// Post Creation Logic is down here >-------

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/submit", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));
  res.redirect("/");
});

// All Posts Logic is down here >-------

app.get("/post/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    res.render("post", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Delete The post Logic is down here >-------

app.post("/delete", (req, res) => {
  const postId = parseInt(req.body.id);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});

// Edit post Logic is down here >-------

app.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).send("Post id is required");
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("edit", { post });
});

app.post("/save", (req, res) => {
  const { id, title , content } = req.body;
  const postId = parseInt(id);

  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).send("Post not found");
  }

  posts[postIndex].title = title;
  posts[postIndex].content = content;
  fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));

  res.redirect("/");
});

// Server is running down there Please maintain decorum >-------

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

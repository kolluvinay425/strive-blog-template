import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author";

// import posts from "../../../data/posts.json";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const url = process.env.BE_URL;
  const fetchData = async () => {
    const response = await fetch(`${url}/blogposts`);
    try {
      if (response.ok) {
        const data = await response.json();
        console.log("dataaaa------>", data);
        setPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        {posts &&
          posts.slice(0, 5).map((post) => (
            <Col md={4} style={{ marginBottom: 50 }}>
              <Link to={`/blog/${post.id}`} className="blog-link">
                <Card className="blog-card">
                  <Card.Img
                    variant="top"
                    src={post.author.avatar}
                    className="blog-cover"
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <BlogAuthor authors={post.author} />
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default BlogList;

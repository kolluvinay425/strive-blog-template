import React from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
const BlogItem = ({ allPosts }) => {
  return (
    <Link to={`/blog/${allPosts.id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img
          variant="top"
          src={allPosts.author.name}
          className="blog-cover"
        />
        <Card.Body>
          <Card.Title>{allPosts.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor authors={allPosts.author} />
        </Card.Footer>
      </Card>
    </Link>
  );
};
export default BlogItem;

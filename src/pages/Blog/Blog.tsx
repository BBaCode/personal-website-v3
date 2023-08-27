import { Container } from "react-bootstrap";

function Blog() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container className="pt-5 mt-5">
      <ul className="list-group">
        {arr.map((blogPost) => {
          return (
            <li
              key={blogPost}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Post Title {blogPost}</div>
                Description for article
              </div>
              <span className="badge bg-primary rounded-pill">
                8/{blogPost + 2}/2023
              </span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Blog;

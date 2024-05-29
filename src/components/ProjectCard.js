import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {url && (
            <button onClick={() => window.open(url, '_blank')} style={{ marginTop: '10px' }}>
              Visit Project
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};

import React from "react";

// links at the bottom of every project card
function ProjectLinks(props) {
  let { links } = props;
  const source = links.source ? <a href="links.source">Source</a> : null;
  const demo = links.demo ? <a href="links.demo">Demo</a> : null;
  const article = links.article ? <a href="links.article">Article</a> : null;
  return (
    <div className="project-links">
      {article}
      {source}
      {demo}
    </div>
  );
}

export default ProjectLinks;

function Project(props) {
  return (
    <div className="project">
      <p>{props.title}</p>
      <p>{props.desc}</p>
      <img src={props.thumbnail} alt={`Preview for ${props.title} project`} />
    </div>
  );
}

export default Project;

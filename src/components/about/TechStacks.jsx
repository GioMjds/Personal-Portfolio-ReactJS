
const TechStacks = () => {
  const techStacks = [
    { name: "HTML", percentage: 69, color: "rgb(241, 101, 41)", },
    { name: "CSS", percentage: 65, color: "rgb(81, 163, 220)", },
    { name: "JavaScript", percentage: 58, color: "rgb(247, 223, 30)", },
    { name: "PHP", percentage: 51, color: "rgb(138, 148, 191)", },
    { name: "Python", percentage: 57, color: "rgb(255, 193, 7)", },
    { name: "React", percentage: 55, color: "rgb(0, 216, 255)", },
    { name: "Git", percentage: 62, color: "rgb(240, 60, 46)", },
    { name: "Flask", percentage: 46, color: "rgb(0, 0, 0)", },
    { name: "MySQL", percentage: 43, color: "rgb(106, 126, 145)", },
    { name: "Firebase", percentage: 32, color: "rgb(244, 189, 98)", },
  ];

  return (
    <div className="tech-stacks grid">
      {techStacks.map((tech, index) => (
        <div className="tech-stack" key={index}>
          <div className="tech-stack__title">
            <h3 className="tech-stack__name">{tech.name}</h3>
            <span className="tech-stack__number">{tech.percentage}%</span>
          </div>

          <div className="tech-stack__bar">
            <span
              className="tech-stack__percentage"
              style={{
                width: `${tech.percentage}%`,
                backgroundColor: `${tech.color}`
              }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStacks
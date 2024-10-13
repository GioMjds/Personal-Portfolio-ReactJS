
const TechStacks = () => {
  const techStacks = [
    { name: "HTML", percentage: 45, color: "rgb(241, 101, 41)", },
    { name: "CSS", percentage: 42, color: "rgb(81, 163, 220)", },
    { name: "JavaScript", percentage: 41, color: "rgb(247, 223, 30)", },
    { name: "PHP", percentage: 46, color: "rgb(138, 148, 191)", },
    { name: "Python", percentage: 52, color: "rgb(255, 193, 7)", },
    { name: "React", percentage: 43, color: "rgb(0, 216, 255)", },
    { name: "Git", percentage: 46, color: "rgb(240, 60, 46)", },
    { name: "Flask", percentage: 32, color: "rgb(0, 0, 0)", },
    { name: "MySQL", percentage: 36, color: "rgb(106, 126, 145)", },
    { name: "Firebase", percentage: 32, color: "rgb(244, 189, 98)", },
  ];

  return (
    <div className="tech-stacks grid">
      {techStacks.map((tech, index) => (
        <div className="tech-stack" key={index}>
          <div className="tech-stack-title">
            <h3 className="tech-stack-name">{tech.name}</h3>
            <span className="tech-stack-number">{tech.percentage}%</span>
          </div>

          <div className="tech-stack-bar">
            <span
              className="tech-stack-percentage"
              style={{
                width: `${tech.percentage}%`,
                backgroundColor: `${tech.color}`
              }}
            >
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStacks
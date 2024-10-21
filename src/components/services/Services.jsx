import "./services.css";

const data = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Front-End Development",
    description: "I specialize in creating visually appealing user-friendly web applications that focuses on delivering seamless user experience through device responsiveness, accessibility standards and optimized performance.",
  },
  {
    id: 2,
    icon: "fas fa-database",
    title: "Database Management",
    description: "I focus on designing, implementing and maintaining robust database systems to ensure data integrity and accessibility includes data migration, security management, backup and recovery and database design.",
  },
  {
    id: 3,
    icon: "fas fa-paintbrush",
    title: "UI/UX Design",
    description: "I'm dedicated to creating intuitive and engaging user experiences that enhance usability and satisfaction that compasses visual and interaction design, usability testing and wireframing and prototyping.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section-title" data-aos="fade-right">Services</h2>
      <div className="services-container grid">
        {data.map(({ id, icon, title, description }) => {
          return (
            <div className="services-card" key={id}>
              <i className={icon}></i>
              <h3 className="services-title">{title}</h3>
              <p className="services-description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services
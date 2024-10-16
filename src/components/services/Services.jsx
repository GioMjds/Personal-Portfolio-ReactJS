import "./services.css";

const data = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Full-Stack Development",
    description: "Designing and developing the client-side using React and other libraries and frameworks, while handling the server-side using Python Django. Also integrating with databases and APIs",
  },
  {
    id: 2,
    icon: "fas fa-database",
    title: "Database Management",
    description: "Designing, implementing, and maintaining databases to store and manage data efficiently while ensuring data security, integrity, and backup and recovery",
  },
  {
    id: 3,
    icon: "fas fa-mobile",
    title: "Mobile App Developer",
    description: "Designed and implemented user interfaces and user experience using React Native, while developing and maintaining mobile applications for Android and iOS platforms",
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
// import Image1 from "../../assets/service-1.svg";
// import Image2 from "../../assets/service-2.svg";
// import Image3 from "../../assets/service-3.svg";
import "./services.css";

const data = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "Designing and developing the client-side using React and other libraries and frameworks, while handling the server-side using Python Django. Also integrating with databases and APIs",
  },
  {
    id: 2,
    title: "Database Management",
    description: "Designing, implementing, and maintaining databases to store and manage data efficiently while ensuring data security, integrity, and backup and recovery",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    description: "Designed and implemented user interfaces and user experience using React Native, while developing and maintaining mobile applications for Android and iOS platforms",
  }
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title" data-aos="fade-right">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services
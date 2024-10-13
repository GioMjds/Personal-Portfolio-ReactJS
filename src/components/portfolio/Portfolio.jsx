import "./portfolio.css";
import Menu from './Menu';
import { useState } from "react";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }
  
  return (
    <section className="work container section" id='portfolio'>
      <h2 className="section-title" data-aos="fade-right">Recent Works</h2>
      <div className="work-filters">
        <span className="work-item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work-item" onClick={() => filterItem("Creative")}>Creative</span>
        <span className="work-item" onClick={() => filterItem("Art")}>Art</span>
        <span className="work-item" onClick={() => filterItem("Design")}>Design</span>
        <span className="work-item" onClick={() => filterItem("Branding")}>Branding</span>
      </div>
      <div className="work-container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work-card" key={id}>
              <div className="work-thumbnail">
                <img src={image} alt="" className="work-img" />
                <div className="work-mask"></div>
              </div>

              <span className="work-category">{category}</span>
              <h3 className="work-title">{title}</h3>
              <a href="#" className="work-button">
                <i className="icon-link work-button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
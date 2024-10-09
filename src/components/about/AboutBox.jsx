
const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">20</h3>
                <span className="about__subtitle">Project(s) Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">1,324</h3>
                <span className="about__subtitle">Cup(s) of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">12</h3>
                <span className="about__subtitle">Satisfied Client(s)</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-info"></i>
            <div>
                <h3 className="about__title">BSIT-SD</h3>
                <span className="about__subtitle">2nd Year</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox
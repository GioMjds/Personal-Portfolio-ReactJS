
const AboutBox = () => {
  return (
    <div className="about-boxes grid">
        <div className="about-box">
            <i className="about-icon icon-fire"></i>
            <div>
                <h3 className="about-title">14</h3>
                <span className="about-subtitle">Project(s) Completed</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-cup"></i>
            <div>
                <h3 className="about-title">1,324</h3>
                <span className="about-subtitle">Cup(s) of Coffee</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-people"></i>
            <div>
                <h3 className="about-title">12</h3>
                <span className="about-subtitle">Satisfied Client(s)</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-info"></i>
            <div>
                <h3 className="about-title">BSIT-SD</h3>
                <span className="about-subtitle">2nd Year</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox
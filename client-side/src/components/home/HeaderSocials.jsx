
const HeaderSocials = () => {
  return (
    <div className="home-socials">
        <a
            href="https://www.facebook.com/Mimic.IGN"
            className="home-social-link"
            target='_blank'
            data-aos="fade-right"
        >
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a
            href="https://www.linkedin.com/in/giomjds/"
            className="home-social-link"
            target='_blank'
            data-aos="zoom-out"
        >
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
            href="https://www.github.com/GioMjds"
            className="home-social-link"
            target='_blank'
            data-aos="zoom-out"
        >
            <i className="fa-brands fa-github"></i>
        </a>
        <a
            href="https://www.instagram.com/giomjds/"
            className="home-social-link"
            target='_blank'
            data-aos="fade-left"
        >
            <i className="fa-brands fa-instagram"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
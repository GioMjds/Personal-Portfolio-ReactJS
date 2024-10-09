
const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a
            href="facebook.com/Mimic.IGN"
            className="home__social-link"
            target='_blank'
            data-aos="fade-right"
        >
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a
            href="linkedin.com/in/giomjds/"
            className="home__social-link"
            target='_blank'
            data-aos="fade-right"
        >
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
            href="github.com/GioMjds"
            className="home__social-link"
            target='_blank'
            data-aos="fade-left"
        >
            <i className="fa-brands fa-github"></i>
        </a>
        <a
            href="instagram.com/giomjds/"
            className="home__social-link"
            target='_blank'
            data-aos="fade-left"
        >
            <i className="fa-brands fa-instagram"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
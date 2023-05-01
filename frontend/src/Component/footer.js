import './footer.css'

function Footer() {
    return (
        <div className="box-container">
            <div className="box">
                <h3>quick links</h3>
                <a class="links" href="#home">home</a>
                <a class="links" href="#about">about</a>
                <a class="links" href="#features">features</a>
                <a class="links" href="#pricing">pricing</a>
                <a class="links" href="#trainers">trainers</a>
                <a class="links" href="#blogs">blogs</a>
            </div>

            <div className="box">
                <h3>opening hours</h3>
                <p> monday : <i> 7:00am - 10:30pm </i> </p>
                <p> tuesday : <i> 7:00am - 10:30pm </i> </p>
                <p> wednesday : <i> 7:00am - 10:30pm </i> </p>
                <p> friday : <i> 7:00am - 10:30pm </i> </p>
                <p> saturday : <i> 7:00am - 10:30pm </i> </p>
                <p> sunday : <i> closed </i> </p>
            </div>

            <div className="box">
                <h3>opening hours</h3>
                <p> <i class="fas fa-phone"></i> +123-456-7890 </p>
                <p> <i class="fas fa-phone"></i> +111-222-3333 </p>
                <p> <i class="fas fa-envelope"></i> shaikhanas@gmail.com </p>
                <p> <i class="fas fa-map"></i> mumbai, india - 400104 </p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f">:smile:</a>
                    <a href="#" class="fab fa-twitter">twitter</a>
                    <a href="#" class="fab fa-pinterest">whatsapp</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const AboutPage = () => {
    return ( 
        <div className="about-page">
        <Header />
        <div className="credits">
        <h2>Written by <a href="https://www.linkedin.com/in/mark-harrison-501a2649/?originalSubdomain=uk">Mark Harrison</a> and <a href="https://andrewblair.co.uk/">Andrew Blair</a></h2>
        <h3>Web App designed and built by Andrew Blair</h3>
        <p>You can find more of Mark's writing about <i>Doctor Who</i> <a href="https://filmstories.co.uk/author/mark-harrison/">here</a>, <a href="https://vodzilla.co/author/mark/">here</a> and <a href="https://www.yahoo.com/author/mark-harrison/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAADbePfS55vhjAbUwsZpAGVGPwzVRzWvSQ8JUgV20g4WCp7ZrCbYfA2F-XdVCIE8kSCTSwH1exWDMZA6iXtLEEWeYCm8TIMOZ_IQMcKnLAMFuptml6982vttyzGdLRa2MLoz35OJUXcZ_9YgHL05yH1O5fiFOh7am2I_fWMWgo793">here</a>.</p>
        <p>You can find more of Andrew's writing about <i>Doctor Who</i> <a href="https://www.denofgeek.com/author/andrew-blair/">here</a> and <a href="https://cultbox.co.uk/author/andrew-blair">here</a></p>
        </div>
        <div className="copyright">
            <h2>Copyright Notices</h2>
        <p><i>Doctor Who</i>, <i>Torchwood</i>, <i>The Sarah Jane Adventures</i>, <i>K9 and Company</i> and the TARDIS are © the BBC.</p>  
        <p>The Daleks are © the Terry Nation Estate.</p> 
        <p>The <i>K9</i> series is © Metal Mutt Productions.</p>
        <p>The use of characters, creations and images under copyright in this quiz is done so under the fair use laws of the UK.</p>    
        <aside>This project is non-commercial and made simply to amuse. Nothing serious, nothing political.</aside>
        </div>
        <Footer />
        </div>
     );
}
 
export default AboutPage;
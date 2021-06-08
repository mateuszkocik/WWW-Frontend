import React, {Component} from "react";
import "./About.css";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="about_container">
                    <div className="description">
                        <p className="title">Passion</p>
                        <p className="contents">
                            Bonomini is a unique hairdressers in Bristol. Known for our creative approach and passion
                            for
                            beautiful hair. We believe in sustainable beauty and that ethos is reflected in our salon,
                            our
                            people and the products we use.
                        </p>
                    </div>
                    <img className="image"
                         src="https://static.desygner.com/wp-content/uploads/sites/13/2019/11/07164536/Hairdresser-Header.jpg"/>
                </div>
                <div className="about_container">
                    <img className="image"
                         src="https://new-cdn.mamamia.com.au/mamamia-pwa.appspot.com/cms_images/variations/3224.900527857143x2149.9336852380957-142948036328.jpg"/>
                    <div className="description">
                        <p className="title">Creativity</p>
                        <p className="contents">
                            We allow our intuition and experience as stylists to guide our creativity; which gives us
                            the freedom to develop colours and styles that are original, authentic and that’ll work with
                            your lifestyle. It’s important for us to create hair that will look beautiful everyday, not
                            just when you step outside of the salon. So whether you’re looking for inspiration,
                            motivation or even a complete transformation—you’re in safe hands. We’re sure you’ll leave
                            us feeling confident and happy about your new hair.
                        </p>
                    </div>
                </div>
                <div className="about_container">
                    <div className="description">
                        <p className="title">
                            Colour
                            Unique and natural
                        </p>
                        <p className="contents">
                            Bonomini is a unique hairdressers in Bristol. Known for our creative approach and passion
                            for
                            beautiful hair. We believe in sustainable beauty and that ethos is reflected in our salon,
                            our
                            people and the products we use.
                        </p>
                    </div>
                    <img className="image"
                         src="https://www.irishtimes.com/polopoly_fs/1.4282502.1592580525!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"/>

                </div>
            </div>
        );
    }
}

export default About;
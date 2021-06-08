import React, {Component} from "react";
import "./Team.css";

class Team extends Component {
    render() {
        return (
            <div>
                <div className="employee_container">
                    <div className="employee">
                        <img
                            src="https://i.pinimg.com/originals/a7/09/39/a70939080f8522da919d649ab345f266.jpg"/>
                        <div className="employee_details">
                            <p className="employee_name">Mel Lopez</p>
                            <p className="employee_description">Mel is Bonomini’s entrepreneurial salon manager, heading
                                up our in-house team.


                                An extremely experienced & talented stylist with a focus on industry-creative colouring
                                and modern styling, Mel creates individualised looks for her clients.
                            </p>
                        </div>

                    </div>
                    <div className="employee">
                        <img
                            src="https://image.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"/>
                        <div className="employee_details">
                            <p className="employee_name">Kat Love</p>
                            <p className="employee_description">Kat’s creativity and flair for creating contemporary and
                                edgier styles reflect her experience working in East London’s fashionable Broadway
                                Market and London Fields. An experienced colourist in creative colouring as well as the
                                more traditional techniques, her passion is to cultivate uncomplicated, modern hair with
                                skill and care.
                            </p>
                        </div>

                    </div>
                    <div className="employee">
                        <img
                            src="https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=6&m=1089633230&s=612x612&w=0&h=FUHE3jCQMIrC72Ux8-rz_z3mHDi2UB61gceLSKAxEwg="/>
                        <div className="employee_details">
                            <p className="employee_name">Sophie Lux</p>
                            <p className="employee_description">Recently returning from Maternity leave, we are thrilled
                                to have Sophie back on the salon floor. A highly experienced member of the team, Sophie
                                delivers consistently beautiful colour and is highly sought after for the perfection and
                                skill she brings to the more traditional colouring techniques. Adaptable and intuitive,
                                she is trusted by her loyal clients to deliver what they want while suggesting ideas
                                they may not have considered otherwise.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
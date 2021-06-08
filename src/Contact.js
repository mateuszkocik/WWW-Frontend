import React, {Component} from "react";
import Accordion from "./Accordion"

class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
                <Accordion>
                    <div className="accor">
                        <div className="head">Telephone</div>
                        <div className="body">
                            <p>123-456-789</p>
                        </div>
                    </div>
                    <div className="accor">
                        <div className="head">Email</div>
                        <div className="body">
                            <p>hairdresser@gmail.com</p>
                        </div>
                    </div>
                    <div className="accor">
                        <div className="head">Location</div>
                        <div className="body">
                            <p>22 Alma Vale Road</p>
                            <p>Clifton</p>
                            <p>Bristol BS8 2HY</p>
                        </div>
                    </div>
                    <div className="accor">
                        <div className="head">Opening times</div>
                        <div className="body">
                            <table className="center">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>From</th>
                                        <th>To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>10:30</td>
                                        <td>16:00</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>8:00</td>
                                        <td>16:30</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10:00</td>
                                        <td>17:15</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>8:00</td>
                                        <td>18:00</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>8:00</td>
                                        <td>13:00</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9:00</td>
                                        <td>15:00</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Accordion>
            </div>
        );
    }
}

export default Contact;
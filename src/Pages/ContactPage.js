import React from "react";
import { Text } from "@nextui-org/react";
import Navbar from "../Components/Navbar";
import "./ContactPage.scss";

const ContactPage = () => {

    return(
            <>
                <Navbar/>

                <div className="contact-bg">
                    <div style={{
                        textAlign: "center",
                    }}>
                        <h1 style={{
                            padding: "20px",
                            display: "inline-block",
                            verticalAlign: "middle",
                            margin: "0",
                        }}>Contact Our</h1>

                        <Text
                            h1
                            css={{
                                textGradient: "45deg, $blue600 -20%, $blue700 50%",
                                display: "inline-block",
                                verticalAlign: "middle",
                                fontWeight: "bold",
                                margin: "0",
                            }}
                            weight="bold"
                        >
                            Team
                        </Text>

                        <img src="https://em-content.zobj.net/thumbs/120/apple/354/blue-heart_1f499.png" alt="/"
                             style={{ width: "60px", height: "60px", marginTop: "20px", position: "relative", left: "20px", top: "20px" }} />
                    </div>




                    <p style={{
                    textAlign: "center",}}>
                    We value your feedback, inquiries, and suggestions, and we're excited to hear from you.<br/>
                    Our dedicated team is here to assist you with any questions or concerns you may have.
                </p>
                </div>
            </>
    )
}

export default ContactPage;
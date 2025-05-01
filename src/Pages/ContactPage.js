import React from "react";
import { Text } from "@nextui-org/react";
import Navbar from "../Components/Navbar";
import "./ContactPage.scss";
import Footer from "../Components/Footer";

import { Input, Spacer } from '@nextui-org/react';
import { Checkbox } from "@nextui-org/react";
import { Textarea, Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";



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
                        }}>Contact Our Team</h1>

                        <img src="https://em-content.zobj.net/source/apple/271/brown-heart_1f90e.png" alt="/"
                             style={{ width: "60px", height: "60px", marginTop: "20px", position: "relative", left: "20px", top: "20px" }} />
                    </div>




                    <p style={{
                    textAlign: "center",}}>
                    We value your feedback, inquiries, and suggestions, and we're excited to hear from you.<br/>
                    Our dedicated team is here to assist you with any questions or concerns you may have.
                </p>
                </div>

                <div className="contact-hero">

                    <div className="contact-form">

                    <div className="form-input">

                        <Grid.Container gap={2.5} css={{
                            display: "grid",
                            maxWidth: "400px",
                            margin: "0 auto",
                        }}>
                            <h2 style={{
                                textAlign: "center",
                                marginTop: "10px",
                                marginRight: "40px",
                                marginBottom: "20px",
                                color: "Black"
                            }}>Contact Form</h2>
                            <Input
                                size="md"
                                placeholder="Name"
                                css={{
                                    borderRadius: "4px",
                                    maxWidth: "400px",
                                }}
                            />
                            <Grid>
                                <Grid.Container gap={3} alignItems="center">
                                    <Grid>
                                        <Checkbox size="md" style={{
                                            left: "-20px",
                                            top: "5px"
                                        }} ></Checkbox>
                                        <Input
                                            size="md"
                                            placeholder="Company"
                                            css={{
                                                borderRadius: "4px",
                                            }}
                                        />
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Input
                                size="md"
                                placeholder="Phone"
                                css={{
                                    borderRadius: "4px",
                                    maxWidth: "400px",
                                }}
                            />
                            <Grid style={{
                                border:"red"
                            }}>
                                <Textarea
                                    size="md"
                                    label=""
                                    helperText="Please don't provide links"
                                    placeholder="_"
                                    css={{
                                        maxWidth: "400px",
                                        width: "400px",
                                        // height: "50px",
                                        top: "20px",
                                        right: "20px",
                                        maxHeight: "800",
                                        // resize: "vertical"
                                    }}
                                />

                            </Grid>
                        </Grid.Container>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "40px",
                        }}>
                            <Button color="primary" auto style={{ marginRight: "30px" }}>
                                Send
                            </Button>
                            <Button color="error" auto style={{ marginLeft: "10px" }}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>

                    <div className="contact-us">
                        <div className="contact-us-title">
                            <h2>Timi<span style={{color: "#6F4E37"}}>cofi</span> Socials</h2>
                        </div>
                        <div className="contact-links">
                            <a href="/"> <img className="socials" src='https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-59-512.png'/>Telegram</a>
                            <a href="/"> <img className="socials" src='https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-03-512.png'/>Instagram</a>
                            <a href="/"> <img className="socials" src='https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-05-512.png'/>Twitter</a>
                            <a href="/"> <img className="socials" src='https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-04-512.png'/>Facebook</a>
                            <a href="/"> <img className="socials" src='https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-44-512.png'/>LinkedIn</a>

                        </div>
                    </div>

                </div>


                <Footer/>
            </>
    )
}

export default ContactPage;
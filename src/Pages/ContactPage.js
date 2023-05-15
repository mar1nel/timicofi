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
                        >Team</Text>

                        <img src="https://em-content.zobj.net/thumbs/120/apple/354/blue-heart_1f499.png" alt="/"
                             style={{ width: "60px", height: "60px", marginTop: "20px", position: "relative", left: "20px", top: "20px" }} />
                    </div>




                    <p style={{
                    textAlign: "center",}}>
                    We value your feedback, inquiries, and suggestions, and we're excited to hear from you.<br/>
                    Our dedicated team is here to assist you with any questions or concerns you may have.
                </p>
                </div>

                <div className="contact-form">
                    <h2 style={{
                        textAlign: "center",
                        marginTop: "-20px",
                        color: "white"
                    }}>Contact Form</h2>
                    <div className="form-input">
                        <Grid.Container gap={2.5} css={{
                            mt: "4px",
                            display: "grid",
                            space: "",
                            maxWidth: "400px",
                            margin: "0 auto",
                        }}>
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
                            marginTop: "20px",
                        }}>
                            <Button color="primary" auto style={{ marginRight: "10px" }}>
                                Send
                            </Button>
                            <Button color="error" auto style={{ marginLeft: "10px" }}>
                                Cancel
                            </Button>
                        </div>



                    </div>
                </div>

                <div className="contact-us">

                </div>



                <Footer/>
            </>
    )
}

export default ContactPage;
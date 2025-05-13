import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {Input, Textarea, Checkbox, Button, Grid} from "@nextui-org/react";
import "./ContactPage.scss";

export default function ContactPage() {
    return (
        <>
            <Navbar/>

            <section className="contact-bg">
                <div className="contact-intro">
                    <h1>Contact Our Team</h1>
                    <img
                        src="https://em-content.zobj.net/source/apple/271/brown-heart_1f90e.png"
                        alt="heart"
                        className="heart-icon"
                    />
                </div>
                <p>
                    We value your feedback, inquiries, and suggestions, and we’re excited
                    to hear from you. Our dedicated team is here to assist with any
                    questions or concerns you may have.
                </p>
            </section>

            <section className="contact-hero">
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <Grid.Container gap={2} justify="center">
                        <Grid xs={12}>
                            <Input clearable fullWidth underlined placeholder="Name"/>
                        </Grid>
                        <Grid xs={12}>
                            <Input clearable fullWidth underlined placeholder="Email" type="email"/>
                        </Grid>
                        <Grid xs={12}>
                            <Input clearable fullWidth underlined placeholder="Phone" type="tel"/>
                        </Grid>
                        <Grid xs={12}>
                            <Textarea
                                underlined fullWidth
                                placeholder="Your message…"
                                helperText="Please don’t include links"
                            />
                        </Grid>
                        <Grid xs={12} className="form-buttons">
                            <Button auto className="btn-send">
                                Send
                            </Button>
                            <Button auto className="btn-cancel">
                                Cancel
                            </Button>
                        </Grid>
                    </Grid.Container>
                </div>

                <div className="contact-us">
                    <h2>
                        Timi<span className="highlight">cofi</span> Socials
                    </h2>
                    <div className="contact-links">
                        <a href="/">
                            <img
                                className="socials"
                                src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-59-512.png"
                                alt="Telegram"
                            />
                            Telegram
                        </a>
                        <a href="/">
                            <img
                                className="socials"
                                src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-03-512.png"
                                alt="Instagram"
                            />
                            Instagram
                        </a>
                        <a href="/">
                            <img
                                className="socials"
                                src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-05-512.png"
                                alt="Twitter"
                            />
                            Twitter
                        </a>
                        <a href="/">
                            <img
                                className="socials"
                                src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-04-512.png"
                                alt="Facebook"
                            />
                            Facebook
                        </a>
                        <a href="/">
                            <img
                                className="socials"
                                src="https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-44-512.png"
                                alt="LinkedIn"
                            />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

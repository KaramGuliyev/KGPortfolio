import React from 'react'
import './experience.css'
import { AiOutlineCheckCircle, AiOutlineHtml5 } from 'react-icons/ai'
import { RiCss3Line } from 'react-icons/ri'
import { IoLogoJavascript,IoLogoNodejs } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { FaBootstrap } from 'react-icons/fa'
import { DiMongodb,DiPhp } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'
import { TbBrandPython } from 'react-icons/tb'


const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I Have</h5>
            <h2>My experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <AiOutlineHtml5 className="experience__details-icon" />
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <RiCss3Line className="experience__details-icon" />
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <IoLogoJavascript className="experience__details-icon" />
                                <h4>JavaScript</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <FaBootstrap className="experience__details-icon" />
                                <h4>Bootstrap</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <GrReactjs className="experience__details-icon" />
                                <h4>ReactJS</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <IoLogoNodejs className="experience__details-icon" />
                                <h4>Node JS</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <DiMongodb className="experience__details-icon" />
                                <h4>MongoDB</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <DiPhp className="experience__details-icon" />
                                <h4>PHP</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <SiMysql className="experience__details-icon" />
                                <h4>MySQL</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className="experience__details-container">
                                <TbBrandPython className="experience__details-icon" />
                                <h4>Phyton</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

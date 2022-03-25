import React from "react"
import Projects_Style from "../styles/Projects.module.css"

function Projects() {
    return (
        <div className={Projects_Style.Main} >
            <div className={Projects_Style.Warning}>
                <h1>IN DEVELOPMENT</h1>
            </div>
            <div className={Projects_Style.Projects}>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        Mercs, Mages and Monsters
                    </p>
                </div>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        Category: Tabletop RPG<br />
                        Release date: TBA
                    </p>
                </div>
            </div>
            <div className={Projects_Style.Projects_Description}>
                <p>
                    A Tabletop Role Playing Game (TTRPG) based in medieval fantasy. Your homeland is in shambles; the elite and their armies snarl over land and resources like dogs over scraps of meat. The influence of the Guilds grows ever stronger in a world where the only true king is coin. Not every threat is obvious, and what you don’t know could very well be what kills you. Join a guild, or create your own; help crown an Emperor, or remove them permanently. The choices, and consequences, are yours. <br /><br /> 3d8 system inspired by themes in Symbaroum/Dark Heresy and others
                </p>
            </div>
            <div className={Projects_Style.Warning}>
                <h1>PLANNED</h1>
            </div>
            <div className={Projects_Style.Projects}>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        WORKING TITLE
                    </p>
                </div>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        CATEGORY: Tabletop<br />
                        RELEASE DATE: TBA
                    </p>
                </div>
            </div>
            <div className={Projects_Style.Projects_Description}>
                <p>
                    PROJECT DESCRIPTION
                </p>
            </div>
            <div className={Projects_Style.Content_Paragraph_Parent}>
                <p className={Projects_Style.Content_Paragraph}>
                    Please follow us on the sites below for updates.<br />
                    Thank you for the interest and support.<br />
                    The Brothers of Bad Toad
                    <br />
                    <span className={Projects_Style.Signature}>
                        J & C
                    </span>

                </p>
            </div>
        </div >
    );
}

export default Projects;

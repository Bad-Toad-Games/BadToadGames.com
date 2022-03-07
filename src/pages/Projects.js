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
                        Mercs- Mages & Monsters
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
                    The core of the game is to acquire gold/ loot for completing Tasks from those  with the means to pay.  This could be a prince, local lord , shady merchant, the oddly well-to-do peasant farmer. No matter the source, yours is a question of do they have the means to pay and is the task worth risking your life. Doing so allows you to upgrade your Character and  increase the Prestige of your guild/group and so on. Which means you’ll be able to get better opportunities. Maybe even a map to raid a tomb or two… for the Museums obviously. <br />( subject to change)
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

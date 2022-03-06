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

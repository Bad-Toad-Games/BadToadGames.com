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
                        Mercs, Mages, and Monsters – Guild Master
                    </p>
                </div>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        PLATFORM: Mobile
                        <br />
                        RELEASE DATE: TBA
                    </p>
                </div>
            </div>
            <div className={Projects_Style.Projects_Description}>
                <p>
                    Set in the same homeland as Mercs, Mages, and Monsters – Tabletop, this game puts control of your own Guild in your hands. Complete the contracts you choose to gain wealth, reputation, and steer the course of events. Decide to work for or against the Consortium and other Guilds. Build your Guild by recruiting new members with skills you need. Customize your own Guild name, coin, and colors. The fate of the land is up to you.
                </p>
            </div>
            <div className={Projects_Style.Projects}>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        Crags and Crevices
                    </p>
                </div>
                <div className={Projects_Style.Projects_Details}>
                    <p>
                        CATEGORY: Tabletop RPG
                        <br />
                        RELEASE DATE: TBD
                    </p>
                </div>
            </div>
            <div className={Projects_Style.Projects_Description}>
                <p>
                    Deep under the Mountains of Klaidheam, among the darkness lies the scattered husks of once great kingdoms, now long dead. Monsters, cultists and perhaps even the lingering spirits of those once noble places of old now dwell here, where relics of knowledge and power may also be found. The once grand city, the Upper Kingdom, home to the Church of The Last Ember and the Rekindler Order, still draws breath as the shadows close in around it. <br /><br /> Become a Reclaimer and delve for on behalf of your Kingdom, your Church, or your Order. Dawn the title of Diver and claim the lost relics for yourself. There remain many opportunities for those that wish to get their hands dirty… one way or another.
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

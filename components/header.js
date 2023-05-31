class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
            .header {
                position: sticky;
                top: 0px;
                z-index: 1;
            }

                .header nav {
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color:  #444444;
            }
    
            .header ul {
                padding: 0;
                margin-bottom: 0;
            }
            
            .header a {
                font-weight: 700;
                margin: 0 25px;
                color: #fff;
                text-decoration: none;
                border-radius: 10%;
            }

            .header a:hover {
                padding-bottom: 5px;
                box-shadow: inset 0 -2px 0 0 #fff;
            }
            
            .header li {
                display: inline-block;
            }

            .header header{
                position:fixed;
                top: 0;
                width: 100%;
            }

            </style>
            <header class="header">
            <nav>
                <ul>
                    <li><div><a href="index.html">About</a></div></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="resume.html">Resume</a></li>
                </ul>
            </nav>
            </header>
        `;
    }

}

customElements.define('header-component', Header);
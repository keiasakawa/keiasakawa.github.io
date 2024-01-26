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
            
            .header .middle {
                font-weight: 700;
                margin: 0 25px;
                color: #fff;
                text-decoration: none;
                border-radius: 10%;
            }

            .header .middle:hover {
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

            .header .linkedin img {
                height: 40px;
                width: 40px;
            }

            .header img {
                position: relative;
                top: 15%;
                height: 30px;
                width: 30px;
                margin: 0 25px;
            }

            .header .right {
                position:absolute;
                right: 0;
            }


            </style>
            <header class="header">
            <nav>
                <ul>
                    <li><div><a class="middle" href="index.html">About</a></div></li>
                    <li><a class="middle" href="resume.html">Resume</a></li>
                </ul>
                <ul class="right">
                    <li><a class="linkedin" href="https://www.linkedin.com/in/kei-asakawa/"><img src="images/linkedin.png" alt=linkedin></a></li>
                    <li><a class="github" href="https://github.com/keiasakawa"><img src="images/github.png" alt=github></a></li>
                
                </ul>
            </nav>
            </header>
        `;
    }

}

customElements.define('header-component', Header);
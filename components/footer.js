class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
            .footer {
                position: sticky;
                bottom: 0px;
                z-index: 1;
            }

                .footer nav {
                height: 50px;
                display: flex;
                margin: auto;
                background-color:  #fff;
                align-items: center;
                justify-content: center;
            }
    
            .footer ul {
                padding: 0;
                height: 100%;
                margin-block-start: 0;
                margin-block-end: 0;
            }
            
            .footer li {
                display: inline-block;
                height: 100%;
            }

            .footer img {
                position: relative;
                top: 15%;
                height: 30px;
                width: 30px;
                margin: 0 25px;
            }

            footer {
                position:fixed;
                bottom: 0;
                width: 100%;
            }
            </style>
            <Footer class="footer">
            <nav>
                <ul>
                    <li><a class="linkedin" href="https://www.linkedin.com/in/kei-asakawa/"><img src="images/linkedin.png" alt=linkedin></a></li>
                    <li><a class="github" href="https://github.com/keiasakawa"><img src="images/github.png" alt=github></a></li>
                </ul>
            </nav>
            </Footer>
        `;
    }

}

customElements.define('footer-component', Footer);
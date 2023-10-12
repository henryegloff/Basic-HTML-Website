
console.log("Hello JavaScript World!");


class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     
	    <header>
	        <nav>
	        	<ul>

		            <li>
		            	<a href="projects.html">
		            		Projects
		            	</a>
		            </li>

		            <li>
		            	<a href="about.html">
		            		Work
		            	</a>
		            </li>

		            <li>
		            	<a href="articles.html">
		            		Articles
		            	</a>
		            </li>
		            
	        	</ul>
	        </nav>
	    </header>

	    <main>
    `;
  }
}

customElements.define('header-component', Header);




class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

     	</main>
     	
	    <footer>
	       <p>&amp; Copyright</p>
	    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
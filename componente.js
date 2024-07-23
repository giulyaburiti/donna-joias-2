class Componente extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
    }
  
    connectedCallback() {
      const div = document.createElement("div");
      div.className = "card mb-3 mt-3";
      div.innerHTML = `
        <div class="row">
            <div class="card" style="width: 17rem;">
                    <img src="images/logo.jpg"" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> 
            <div class="card" style="width: 17rem;">
                    <img src="images/aneis.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            <div class="card" style="width: 17rem;">
                    <img src="images/brincos.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            <div class="card" style="width: 17rem;">
                    <img src="images/colares.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
        </div>
      `;
      this.appendChild(div);
    }
  
}
  
customElements.define("componente-novo", Componente);
class Componente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.className = "card-deck";
        div.innerHTML = `
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-gota-ponto-de-luz.png" class="card-img-top" alt="Donna Joias">
                        <div class="card-body">
                            <h5 class="card-title">Anel Gota Ponto de Luz</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-cristal-diamantado.jpg" class="card-img-top" alt="Donna Joias">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Cristal Diamante</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/corrente.jpg" class="card-img-top" alt="Donna Joias">
                        <div class="card-body">
                            <h5 class="card-title">Corrente</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-bolinhas.png" class="card-img-top" alt="Donna Joias">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira de Bolinhas</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("componente-novo", Componente);

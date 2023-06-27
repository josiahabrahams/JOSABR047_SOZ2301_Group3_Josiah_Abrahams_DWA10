const template = document.createElement('template')
template.innerHTML = /*html */`
<style>
.display{
    display: flex;
    align-items: center;
    flex-direction: column ;
    border-width: 5px;
    justify-content: center;
    height: 50vh;
    
}

.space{
    height: 10vh;
    width: 70.3%;
    border-bottom: none;
     border: 1px solid black;
    padding-top: 2rem;
    text-align: center;
    background-color: white;
}

</style>

 

 <div class="display">
 <slot name = "displayArea"></slot>
<div class="space">
 <slot name = "buttonSection"></slot>
   </div>
 </div>
`

class WebLayOut extends HTMLElement {
    #inner = this.attachShadow({ mode: "closed" });

    connectedCallback() {
      const { content } = template;
      this.#inner.appendChild(content.cloneNode(true));
      
    }

}
customElements.define('tally-layout', WebLayOut)
class Navigation extends HTMLElement {
    constructor() {
        super()
        console.log('Web Component Navigation created!')
    }

}

customElements.define('wc-navigation', Navigation);
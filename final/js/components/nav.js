export default class Nav {
    constructor() {
        this.items = [];
    }
    build = () => {
        let div = document.createElement('div');
        this.getItems(div);
        return div;
    }
    getItems = (node) => {
            this.items.forEach(item => {
            let newNode = document.createElement('button');
            node.append(newNode);
        })
    }
}
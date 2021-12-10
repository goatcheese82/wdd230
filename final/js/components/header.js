import Nav from './nav.js';

export default class Header {
    constructor(node) {
        this.node = node;
    }
    build = () => {
        let nav = new Nav();
        let subNode = nav.build();
        this.node.append(subNode);
    }
}
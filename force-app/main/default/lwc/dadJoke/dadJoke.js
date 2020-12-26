import { LightningElement, api } from 'lwc';

export default class DadJoke extends LightningElement {
    @api index;
    @api joke;

    get isFirstJoke(){
        return this.index === 0;
    }
}
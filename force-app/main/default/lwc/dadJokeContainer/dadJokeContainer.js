import { LightningElement, track } from 'lwc';

export default class DadJokeContainer extends LightningElement {
    
    @track jokes = [];

    getNewJoke(){            

        fetch('https://icanhazdadjoke.com', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then((response) => {

            if (response.ok) {
                return response.json();
            } 
        }).then((obj) => {
            this.jokes.unshift(obj.joke);
        });
    }

    get jokeList(){
        return !!this.jokes ? this.jokes : false;
    }
}
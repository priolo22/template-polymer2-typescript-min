

import { User } from "../models/users";



export class MyComponent extends Polymer.Element {

    static get is() { return 'my-cmp'; }

    static get properties():any { 
        return {
            model: {
                type: Object,
            }
        };
    }

    static get observers() {
        return [
            'modelChanged(model)'
        ]
    }

	constructor() {
		super();
        this.model = new User("Ivano", "iorio");
	}

    model: User;

}


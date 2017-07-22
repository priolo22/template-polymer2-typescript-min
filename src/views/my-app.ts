


export class MyApp extends Polymer.Element {

    static get is() { return 'my-app'; }

	constructor() {
		super();
	}


    // INTERFACE EVENTS

    onClick():void {
        console.log("on click");
    }

}


/// <reference path="../../typings/element.d.ts" />

import { User } from "../models/users";



export class MyApp extends Polymer.Element {

    static get is() { return 'my-app'; }

    static get properties():any { 
        return {
            model: {
                type: Object,
                // value: function() { return ["primo","secondo","terzo"]; },
                // readOnly: true,
                // notify: true,
                // computed: "function name",
                // observer: "function name",
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

    model: any;





    onTapTest():void {
        console.log("on tap");
    }
    onTapAddInArray():void {
        console.log("on tap");
    }
    modelChanged ( value:any, oldValue:any ): void {
        console.log ( "onTestPropChange: "+value );
    }

}


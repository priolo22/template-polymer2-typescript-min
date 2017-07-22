System.register("models/users", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters: [],
        execute: function () {
            User = class User {
                constructor(name, surname) {
                    this.name = name;
                    this.surname = surname;
                }
            };
            exports_1("User", User);
        }
    };
});
/// <reference path="../../typings/element.d.ts" />
System.register("views/my-app", ["models/users"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var users_1, MyApp;
    return {
        setters: [
            function (users_1_1) {
                users_1 = users_1_1;
            }
        ],
        execute: function () {/// <reference path="../../typings/element.d.ts" />
            MyApp = class MyApp extends Polymer.Element {
                static get is() { return 'my-app'; }
                static get properties() {
                    return {
                        model: {
                            type: Object,
                        }
                    };
                }
                static get observers() {
                    return [
                        'modelChanged(model)'
                    ];
                }
                constructor() {
                    super();
                    this.model = new users_1.User("Ivano", "iorio");
                }
                onTapTest() {
                    console.log("on tap");
                }
                onTapAddInArray() {
                    console.log("on tap");
                }
                modelChanged(value, oldValue) {
                    console.log("onTestPropChange: " + value);
                }
            };
            exports_2("MyApp", MyApp);
        }
    };
});

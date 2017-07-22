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
System.register("views/my-app", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var MyApp;
    return {
        setters: [],
        execute: function () {
            MyApp = class MyApp extends Polymer.Element {
                static get is() { return 'my-app'; }
                constructor() {
                    super();
                }
                // INTERFACE EVENTS
                onClick() {
                    console.log("on click");
                }
            };
            exports_2("MyApp", MyApp);
        }
    };
});
System.register("views/my-cmp", ["models/users"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var users_1, MyComponent;
    return {
        setters: [
            function (users_1_1) {
                users_1 = users_1_1;
            }
        ],
        execute: function () {
            MyComponent = class MyComponent extends Polymer.Element {
                static get is() { return 'my-cmp'; }
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
            };
            exports_3("MyComponent", MyComponent);
        }
    };
});

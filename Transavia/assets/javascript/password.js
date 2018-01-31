
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Original code made by Gabriele Romanato
//Source: https://codepen.io/gabrieleromanato/pen/VYmrJV/

(function() {

    var PasswordToggler = function( element, field ) {
        this.element = element;
        this.field = field;

        this.toggle();
    };

    PasswordToggler.prototype = {
        toggle: function() {
            var self = this;
            self.element.addEventListener( "change", function() {
                if( self.element.checked ) {
                    self.field.setAttribute( "type", "text" );
                } else {
                    self.field.setAttribute( "type", "password" );
                }
            }, false);
        }
    };

    document.addEventListener( "DOMContentLoaded", function() {
        var checkbox = document.querySelector( "#show-hide" ),
            pwd = document.querySelector( "#pwd" ),
            form = document.querySelector( "#login" );

            form.addEventListener( "submit", function( e ) {
                e.preventDefault();
            }, false);

            var toggler = new PasswordToggler( checkbox, pwd );

    });

})();

var Baobab = require('baobab'),
    appCursor = new Baobab({}),
    componentCursorMapping;

module.exports = {   

    
    init: function(p_componentCursorMapping) {
        componentCursorMapping = p_componentCursorMapping;

        if( !componentCursorMapping ) {

            console.warn( 'No component cursor mapping defined.' );
        }
    },


    getCursor: function(component, subpath) {
        var root;
        
        if( !componentCursorMapping[ component.displayName ] ) {

            throw new Error( 'No cursor access defined in `componentCursorMapping` for component with displayName ' + component.displayName );
        }
        root = componentCursorMapping[ component.displayName ];
        
        return appCursor.select( root + subpath );
    }
};

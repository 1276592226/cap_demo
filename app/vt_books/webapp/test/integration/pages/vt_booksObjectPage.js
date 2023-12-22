sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sap.app.vt.vtbooks',
            componentId: 'vt_booksObjectPage',
            contextPath: '/vt_books'
        },
        CustomPageDefinitions
    );
});
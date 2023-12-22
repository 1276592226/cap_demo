sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sap.app.vt.vtbooks',
            componentId: 'vt_booksList',
            contextPath: '/vt_books'
        },
        CustomPageDefinitions
    );
});
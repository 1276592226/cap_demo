sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/app/vt/vtbooks/test/integration/FirstJourney',
		'sap/app/vt/vtbooks/test/integration/pages/vt_booksList',
		'sap/app/vt/vtbooks/test/integration/pages/vt_booksObjectPage'
    ],
    function(JourneyRunner, opaJourney, vt_booksList, vt_booksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/app/vt/vtbooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThevt_booksList: vt_booksList,
					onThevt_booksObjectPage: vt_booksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
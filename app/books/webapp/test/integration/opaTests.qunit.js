sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/app/books/test/integration/FirstJourney',
		'sap/app/books/test/integration/pages/booksList',
		'sap/app/books/test/integration/pages/booksObjectPage'
    ],
    function(JourneyRunner, opaJourney, booksList, booksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/app/books') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThebooksList: booksList,
					onThebooksObjectPage: booksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
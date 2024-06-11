sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskMangement/Risks/test/integration/FirstJourney',
		'RiskMangement/Risks/test/integration/pages/List',
		'RiskMangement/Risks/test/integration/pages/ObjectPage'
    ],
    function(JourneyRunner, opaJourney, List, ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskMangement/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheList: List,
					onTheObjectPage: ObjectPage
                }
            },
            opaJourney.run
        );
    }
);
import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";
import { android, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityEventData, AndroidActivityResultEventData, AndroidActivityBackPressedEventData } from "tns-core-modules/application";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    constructor() {
		// Use the component constructor to inject providers.
		
		if (isAndroid) {
			android.on(AndroidApplication.activityBackPressedEvent, (args: AndroidActivityBackPressedEventData) => {
				args.cancel = false;
			});
		}
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

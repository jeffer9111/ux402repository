sap.ui.define([
    "sap/ui/core/Control",
    "student/com/sap/training/ux402/fullscreen/ux402fullscreen/control/PlaneInfoRenderer"
],

    function (Control, PlaneInfoRenderer) {
        "use strict";

        return Control.extend("student.com.sap.training.ux402.fullscreen.ux402fullscreen.control.PlaneInfo", {

            metadata: {
                properties: {
                    "seatsMax": {
                        type: "string"
                    },
                    "seatsOcc": {
                        type: "string"
                    }
                }
            },

            rederer: PlaneInfoRenderer

        })
    });
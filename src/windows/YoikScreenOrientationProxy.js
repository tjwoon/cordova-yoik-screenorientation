module.exports = {

    setOrientation: function (success, fail, args)
    {
        var orientation;
        switch(args[0]) {
            case "unlocked":
                orientation = Windows.Graphics.Display.DisplayOrientations.none;
                break;
            case "portrait-primary":
                orientation = Windows.Graphics.Display.DisplayOrientations.portrait;
                break;
            case "portrait-secondary":
                orientation = Windows.Graphics.Display.DisplayOrientations.portraitFlipped;
                break;
            case "landscape-primary":
                orientation = Windows.Graphics.Display.DisplayOrientations.landscape;
                break;
            case "landscape-secondary":
                orientation = Windows.Graphics.Display.DisplayOrientations.landscapeFlipped;
                break;
            case "portrait":
                orientation = Windows.Graphics.Display.DisplayOrientations.portrait
                            | Windows.Graphics.Display.DisplayOrientations.portraitFlipped;
                break;
            case "landscape":
                orientation = Windows.Graphics.Display.DisplayOrientations.landscape
                            | Windows.Graphics.Display.DisplayOrientations.landscapeFlipped;
                break;
            // valid values are checked in screenorientation.js
        }

        Windows.Graphics.Display.DisplayInformation.autoRotationPreferences = orientation;
    },

};

require("cordova/windows/commandProxy").add("YoikScreenOrientation", module.exports);

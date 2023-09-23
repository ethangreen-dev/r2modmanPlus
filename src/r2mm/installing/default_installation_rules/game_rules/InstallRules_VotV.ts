import type { CoreRuleType } from '../../InstallationRules';
import * as path from 'path';

export default function(): CoreRuleType {

    return {
        gameName: "VotV",
        relativeFileExclusions: ["manifest.json", "README.md", "icon.png", "LICENCE"],
        rules: [
            {
                route: path.join("shimloader/ue4ss_mods"),
                defaultFileExtensions: [".lua"],
                trackingMethod: "SUBDIR_NO_FLATTEN",
                subRoutes: [],
            },
            {
                route: path.join("shimloader/bp_mods"),
                defaultFileExtensions: [".pak"],
                trackingMethod: "STATE",
                subRoutes: [],
            },
            {
                route: path.join("shimloader/config"),
                defaultFileExtensions: [".modconf"],
                trackingMethod: "NONE",
                subRoutes: [],
            }
        ]
    }

}


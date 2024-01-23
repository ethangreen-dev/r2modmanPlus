import type { CoreRuleType } from '../../InstallationRules';
import * as path from 'path';
import { GAME_NAME } from '../../profile_installers/ModLoaderVariantRecord';
import { RuleSubtype } from "../../InstallationRules";

export function buildShimloaderRules(gameName: GAME_NAME, extraRules?: RuleSubtype[]): CoreRuleType {
    return {
        gameName: gameName,
        relativeFileExclusions: ["manifest.json", "README.md", "icon.png", "LICENCE"],
        rules: [
            {
                route: path.join("shimloader/ue4ss_mods"),
                defaultFileExtensions: [".lua"],
                trackingMethod: "UE4SS_LUA",
                subRoutes: []
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

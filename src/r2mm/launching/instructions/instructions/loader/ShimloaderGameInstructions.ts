import GameInstructionGenerator from '../GameInstructionGenerator';
import { GameInstruction } from '../../GameInstructions';
import Game from '../../../../../model/game/Game';
import Profile from '../../../../../model/Profile';
import { DynamicGameInstruction } from '../../DynamicGameInstruction';
import * as path from 'path';

export default class ShimloaderGameInstructions extends GameInstructionGenerator {

    public async generate(game: Game, profile: Profile): Promise<GameInstruction> {
        const shimloader = path.join(profile.getPathOfProfile(), "shimloader");

        const ue4ssDir = path.join(shimloader, "ue4ss_mods");
        const bpDir = path.join(shimloader, "bp_mods");
        const configDir = path.join(shimloader, "config");

        return {
            moddedParameters: `--ue4ss-mods "${ue4ssDir}" --bp-mods "${bpDir}" --config-dir "${configDir}"`,
            vanillaParameters: `--disable-mods`
        }
    }
}
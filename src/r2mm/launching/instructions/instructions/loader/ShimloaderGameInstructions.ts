import GameInstructionGenerator from '../GameInstructionGenerator';
import { GameInstruction } from '../../GameInstructions';
import Game from '../../../../../model/game/Game';
import Profile from '../../../../../model/Profile';
import { DynamicGameInstruction } from '../../DynamicGameInstruction';
import * as path from 'path';

export default class ShimloaderGameInstructions extends GameInstructionGenerator {

    public async generate(game: Game, profile: Profile): Promise<GameInstruction> {
        const ue4ssDir = path.join(profile.getPathOfProfile(), "shimloader", "ue4ss_mods");
        const bpDir = path.join(profile.getPathOfProfile(), "shimloader", "bp_mods");

        return {
            moddedParameters: `--ue4ss-mods "${ue4ssDir}" --bp-mods "${bpDir}"`,
            vanillaParameters: `--disable-mods`
        }
    }
}
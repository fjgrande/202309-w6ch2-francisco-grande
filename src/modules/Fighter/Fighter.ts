import Character from "../Character/Character";
import type CharacterData from "../Types/CharacterData";

export class Fighter extends Character {
  weapon: string;
  dexterity: number;

  constructor(characterData: CharacterData, weapon: string, dexterity: number) {
    super(characterData);
    this.weapon = weapon;
    this.dexterity = this.filterDexterity(dexterity);
  }

  communicate() {
    return `${super.communicate()}First I hit and then I ask`;
  }

  private filterDexterity(dexterity: number) {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}
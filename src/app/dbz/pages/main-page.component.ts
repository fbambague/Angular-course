import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzServiceService } from "../services/dbz-service.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor(
    private dbzservice: DbzServiceService
  ){}

  get characters(): Character[]{
    return [...this.dbzservice.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzservice.onDeleteCharacterById(id);
  }

  addCharacter(character: Character):void{
    this.dbzservice.addCharacter(character);
  }

}

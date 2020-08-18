import { Component, OnInit } from '@angular/core';
import { EntityService, EnvironmentService, SpeciesService, WorldService } from '../services';
import { NutritionalType } from '../enums';

@Component({
  selector: 'ecosys-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(
    private worldService: WorldService,
    private environmentService: EnvironmentService,
    private speciesService: SpeciesService,
    private entityService: EntityService) {

    //** World */
    const world = this.worldService.create({
      timespeed: 1,
    });

    //** Environments */
    const environment1 = this.environmentService.create(world, {
      oxygenLevel: .8,
      nutrientLevel: .3,
    });
    const environment2 = this.environmentService.create(world, {
      oxygenLevel: .2,
      nutrientLevel: 0,
    });

    //** Species */
    const lion = this.speciesService.create("lion", NutritionalType.CARNIVOROUS, {
      averageSize: 10,
      averageSpeed: 10,
      averageWeight: 20,
      nutritionalNeeds: 120,
      oxygenNeeds: 80,
    });
    const tigre = this.speciesService.create("tigre", NutritionalType.CARNIVOROUS, {
      averageSize: 12,
      averageSpeed: 10,
      averageWeight: 12,
      nutritionalNeeds: 110,
      oxygenNeeds: 80,
    });
    const zebre = this.speciesService.create("zebre", NutritionalType.HERBIVOROUS, {
      averageSize: 8,
      averageSpeed: 6,
      averageWeight: 9,
      nutritionalNeeds: 70,
      oxygenNeeds: 80,
    });

    //** Entities */
    const lion1 = this.entityService.create(lion, environment1);
    const lion2 = this.entityService.create(lion, environment1);
    const tigre1 = this.entityService.create(tigre, environment2);
    const zebre1 = this.entityService.create(zebre, environment1);

    //** Tests */
    // console.log( this.entityService.getOne(2) );
    // console.log( this.entityService.getAll() );
    // console.log( this.entityService.getAllBySpecies(lion) );
    // console.log( this.entityService.getAllBySpecies(tigre) );
    // console.log( this.entityService.getAllByEnvironment(environment) );

    // console.log( this.speciesService.getOneByEntity(lion1));
    // console.log( this.speciesService.getOneByEntity(tigre1));

    // console.log( this.environmentService.getOneByEntity(lion1) );
    // console.log( this.environmentService.getOneByEntity(tigre1) );
  }

  ngOnInit() {
  }

}

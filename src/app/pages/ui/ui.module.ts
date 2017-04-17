import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './ui.routing';
import { Ui } from './ui.component';
import { Buttons } from './components/buttons/buttons.component';
import { Icons } from './components/icons/icons.component';
import { Typography } from './components/typography/typography.component';

import { FlatButtons } from './components/buttons/components/flatButtons';
import { RaisedButtons } from './components/buttons/components/raisedButtons';
import { SizedButtons } from './components/buttons/components/sizedButtons';
import { DisabledButtons } from './components/buttons/components/disabledButtons';
import { IconButtons } from './components/buttons/components/iconButtons';
import { LargeButtons } from './components/buttons/components/largeButtons';
import { DropdownButtons } from './components/buttons/components/dropdownButtons';
import { GroupButtons } from './components/buttons/components/groupButtons';
import { IconsService } from './components/icons/icons.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    routing
  ],
  declarations: [
    Buttons,
    Icons,
    Typography,
    Ui,
    FlatButtons,
    RaisedButtons,
    SizedButtons,
    DisabledButtons,
    IconButtons,
    LargeButtons,
    DropdownButtons,
    GroupButtons
  ],
  entryComponents: [
  ],
  providers: [
    IconsService
  ]
})
export class UiModule {
}

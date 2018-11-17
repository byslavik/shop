import { Component, OnInit, Inject, Optional } from '@angular/core';
import { APP_CONSTANTS, ConstantsModel } from '../core/constants.service';
import { GeneratorService } from '../core/generator.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  helloMessage: string;

  constructor(@Inject(APP_CONSTANTS) private constants: ConstantsModel, @Optional() private generator: GeneratorService) {}

  ngOnInit() {
    this.helloMessage = `This application name is ${this.constants.App}.
                          Version: ${this.constants.Ver}. Lets generate some token: ${this.generator.getToken()}`;
  }

}

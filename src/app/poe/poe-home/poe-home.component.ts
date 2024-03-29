import { Component } from '@angular/core';
import { Intern } from '../../home/types/intern.type';
import { InternService } from '../../home/services/intern.service';

@Component({
  selector: 'app-poe-home',
  templateUrl: './poe-home.component.html',
  styleUrl: './poe-home.component.scss'
})
export class PoeHomeComponent {
  public interns:Intern[] = []
  constructor (private _service:InternService){
  
  }


  ngOnInit(): void {
    this._service.findAll()

    .subscribe((interns:Intern[])=>this.interns = interns)

}

}
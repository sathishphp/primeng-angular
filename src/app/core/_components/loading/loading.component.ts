import { Component } from '@angular/core';
import { LoaderService } from '../../_services';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor(protected loader:LoaderService){

  }

}

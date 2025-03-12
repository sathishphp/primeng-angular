import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'; 
import { TagModule } from 'primeng/tag'; 
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule, AuthModule, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-angular';
  constructor() {}
  ngOnInit() {
    
}

}


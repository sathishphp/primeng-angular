import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'; 
import { TagModule } from 'primeng/tag'; 
import { ProductService } from './product.service';
import { Product } from './product';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,TableModule,TagModule, SharedModule, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-angular';
  products!: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
        this.products = data;
    });
}

}


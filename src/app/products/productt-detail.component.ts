import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  templateUrl: './productt-detail.component.html',
  styleUrls: ['./productt-detail.component.css']
})
export class ProducttDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  products: IProduct[] = []
  imageWidth: Number = 200;
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle += `: ${id}`
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
          this.products = products;
          this.product = this.products.find(product => product.productId == id)
      },
      error: err => this.errorMessage = err
  })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBack(): void{
    this.router.navigate(['/products'])
  }
}

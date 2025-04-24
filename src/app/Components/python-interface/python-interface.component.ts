import { Component, NgModule } from '@angular/core';
import { PythonService } from '../../Services/python.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-python-interface',
  standalone: true, // This makes the component standalone
  templateUrl: './python-interface.component.html',
  styleUrls: ['./python-interface.component.css'],
  imports:[CommonModule, FormsModule]
})
export class PythonInterfaceComponent {
  stock: any[] = [];
  itemsInCart: any[] = [];
  totalPrice: number = 0;
  email: string = '';
  newQuantity: number = 0;
  selectedItem: string = '';

  constructor(private pythonService: PythonService) {}

  // Fetch the stock list
  fetchStock() {
    this.pythonService.displayStock().subscribe((data) => {
      this.stock = data;
    });
  }

  // Add item to cart and calculate total price
  addItemToCart(item: any, quantity: number) {
    const price = item.price_per_kg_or_packet;
    const totalItemPrice = quantity * price;
    this.itemsInCart.push({ name: item.item_name, quantity, price: totalItemPrice });
    this.totalPrice += totalItemPrice;
  }

  // Update product quantity
  updateQuantity() {
    if (this.selectedItem && this.newQuantity) {
      this.pythonService.editQuantity(this.selectedItem, this.newQuantity).subscribe((response) => {
        alert(response.message);
        this.fetchStock(); // Re-fetch stock after update
      });
    }
  }

  // Generate bill
  generateBill() {
    if (this.itemsInCart.length > 0) {
      this.pythonService.generateBill(this.itemsInCart).subscribe((data) => {
        alert(`Total Bill: ${data.total}`);
      });
    }
  }

  // Send the email
  sendEmail() {
    if (this.email && this.totalPrice > 0) {
      this.pythonService.sendEmail(this.email, this.totalPrice).subscribe((response) => {
        alert(response.message);
      });
    }
  }

  ngOnInit() {
    this.fetchStock();
  }
}

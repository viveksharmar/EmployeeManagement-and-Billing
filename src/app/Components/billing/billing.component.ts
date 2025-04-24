import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Required for standalone components
import html2canvas from 'html2canvas';  // To capture bill as an image
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,  // Standalone component flag
  imports: [CommonModule, FormsModule],  // Import Angular's CommonModule for basic directives
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  // List of products (20 items)
  products = [
    { name: 'Biscuits', price: 20 },
    { name: 'Rice', price: 50 },
    { name: 'Sugar', price: 40 },
    { name: 'Tea', price: 30 },
    { name: 'Wheat', price: 60 },
    { name: 'Salt', price: 15 },
    { name: 'Oil', price: 100 },
    { name: 'Soap', price: 35 },
    { name: 'Shampoo', price: 120 },
    { name: 'Toothpaste', price: 25 },
    { name: 'Detergent', price: 45 },
    { name: 'Milk', price: 25 },
    { name: 'Eggs', price: 10 },
    { name: 'Butter', price: 55 },
    { name: 'Cheese', price: 80 },
    { name: 'Chocolate', price: 45 },
    { name: 'Juice', price: 40 },
    { name: 'Cereals', price: 60 },
    { name: 'Frozen Vegetables', price: 75 },
    { name: 'Juice', price: 45 }
  ];

  // Declare the selected product and quantity
  selectedProduct: any = this.products[0]; // Default to the first product
  quantity: number = 1; // Default quantity

  // Cart to hold selected items
  cart: { product: any, quantity: number, totalPrice: number }[] = [];

  customerName = '';
  totalBill = 0;
  billGenerated = false;

  // Function to add items to the cart
  addItemToCart(selectedProduct: any, quantity: number) {
    if (quantity > 0) {
      const itemTotal = selectedProduct.price * quantity;
      this.cart.push({ product: selectedProduct, quantity, totalPrice: itemTotal });
      this.calculateTotalBill();
    } else {
      alert('Please enter a valid quantity');
    }
  }

  // Calculate the total bill
  calculateTotalBill() {
    this.totalBill = this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  // Function to generate bill
  generateBill() {
    if (this.customerName.trim() !== '' && this.cart.length > 0) {
      this.billGenerated = true;
    } else {
      alert('Please enter a customer name and add items to the cart');
    }
  }

  // Function to download the bill as an image
  downloadBillAsImage() {
    const billElement = document.getElementById('billContainer');

    if (billElement) {
      html2canvas(billElement).then(canvas => {
        const image = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = image;
        link.download = 'supermart-bill.png';
        link.click();
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // We are using 'root' so Angular knows this is a singleton service.
})
export class PythonService {
  private apiUrl = 'http://127.0.0.1:5000/api';  // Flask API URL
  
  constructor(private http: HttpClient) {}

  // Fetch the stock information
  displayStock(): Observable<any> {
    return this.http.get(`${this.apiUrl}/display-stock`);
  }

  // Update product quantity
  editQuantity(item_name: string, new_quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/edit-quantity`, { item_name, new_quantity });
  }

  // Generate bill (mock-up)
  generateBill(items: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate-bill`, { items });
  }

  // Send Email
  sendEmail(email: string, total_price: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, { email, total_price });
  }
}

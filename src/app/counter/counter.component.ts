import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  generatedOtp: string | null = null;
  otpErrorMessage: string | null = null;

  generateOtp() {
    this.generatedOtp = this.otp(4); // Generate a 4-digit OTP
  }

  otp(limit: number): string {
    let otp = '';
    const digits = '0123456789';
    for (let i = 0; i < limit; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }

  moveFocus(nextInput: HTMLInputElement | null) {
    if (nextInput) {
      nextInput.focus();
    }
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactFormEmail({
      name,
      email,
      subject,
      message,
    });

    if (result.success) {
      return NextResponse.json(
        { 
          message: '✅ Message sent successfully! You will receive a confirmation email shortly. Our team will review your inquiry and get back to you within 24-48 hours with a detailed response.',
          success: true 
        },
        { status: 200 }
      );
    } else {
      console.error('Email sending failed:', result.error);
      return NextResponse.json(
        { 
          error: '❌ Failed to send message. Please check your internet connection and try again. If the problem persists, please call us at 8928551747.',
          success: false 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again.',
        success: false 
      },
      { status: 500 }
    );
  }
}

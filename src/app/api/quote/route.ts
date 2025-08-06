import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, projectDetails, budget, timeline } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !projectDetails || !budget || !timeline) {
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

    // Validate phone number (basic validation)
    if (phone.length < 10) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendQuoteRequestEmail({
      name,
      email,
      phone,
      projectType,
      projectDetails,
      budget,
      timeline,
    });

    if (result.success) {
      return NextResponse.json(
        { 
          message: '✅ Quote request sent successfully! You will receive a confirmation email shortly. Our team will review your project details and get back to you with a detailed estimate within 24-48 hours.',
          success: true 
        },
        { status: 200 }
      );
    } else {
      console.error('Quote email sending failed:', result.error);
      return NextResponse.json(
        { 
          error: '❌ Failed to send quote request. Please check your internet connection and try again. If the problem persists, please call us at 8928551747.',
          success: false 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again.',
        success: false 
      },
      { status: 500 }
    );
  }
}

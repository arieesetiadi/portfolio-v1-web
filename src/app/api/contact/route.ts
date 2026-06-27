import { NextResponse } from "next/server";
import { render } from "react-email";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations/contact";
import { nodemailer } from "@/lib/nodemailer";
import ContactMail from "@/components/emails/contact-mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      },
    });

    // Mail sending
    const sent = await nodemailer.sendMail({
      from: "Arie Setiadi <ariee.setiadi@gmail.com>",
      to: "ariee.setiadi@gmail.com",
      replyTo: validatedData.email,
      subject: `New message from ${validatedData.name} via Portfolio`,
      html: await render(
        ContactMail({
          name: validatedData.name,
          mail: validatedData.email,
          message: validatedData.message,
        }),
      ),
    });

    return NextResponse.json({ success: true, contact, sent }, { status: 201 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}

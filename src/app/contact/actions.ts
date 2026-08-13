"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(formData: ContactFormData) {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not configured");
    return { success: false, error: "Server configuration error" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "🔔 New Contact Form Submission",
            color: 0x3b82f6,
            description: `**Name:**\n\`\`\`text\n${name}\n\`\`\`\n**Email:**\n\`\`\`text\n${email}\n\`\`\`\n**Message:**\n\`\`\`text\n${message}\n\`\`\``,
          },
        ],
      }),
    });

    return { success: response.ok };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false };
  }
}

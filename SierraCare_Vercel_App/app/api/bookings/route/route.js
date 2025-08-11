export async function POST(request) {
  try {
    const body = await request.json();
    // In production, send to your database or email provider.
    // For now, log to serverless function output.
    console.log('New booking request', body);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response('Invalid request', { status: 400 });
  }
}

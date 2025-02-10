import postgres from 'postgres';
import process from "node:process";


// const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});
const sql = postgres(process.env.POSTGRES_URL!,
    {
        db: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        port: Number(process.env.POSTGRES_PORT) ?? 5432,
        //ssl: 'require'
    });

async function listInvoices() {
    const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

    return data;
}

export async function GET() {
    /*return Response.json({
        message:
            'Uncomment this file and remove this line. You can delete this file when you are finished.',
    });*/
    try {
        return Response.json(await listInvoices());
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}

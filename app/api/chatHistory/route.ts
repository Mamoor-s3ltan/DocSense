import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";


const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

const supabase = createClient(url, supabaseKey);

export async function POST(req:Request){
    const chat =  await req.json();
    console.log(chat);
    try {
        // Save chat history to Supabase
        const {data,error}= await supabase.from('Chat').insert({
            query: chat.query,
            answer: chat.answer,
            created_at: new Date().toISOString()
        })
        if(error){
            console.error("Supabase error:", error);
        }
        return NextResponse.json({success:true,data:data},{status:201});


    } catch (error) {
        console.error("Error saving chat history:", error);
        return new Response(JSON.stringify({ error: 'Failed to save chat history' }), { status: 500 });
    }
}

export async function GET(req:Request,res:Response){
try{
const {data,error} =await supabase.from("Chat").select("*").order('created_at',{ascending:false}).limit(20);
if(error){
    console.error("Supabase error:", error);
    return NextResponse.json({error:error.message},{status:500});
}
return NextResponse.json({success:true,data:data},{status:200});
}catch(error){
    console.error("Error fetching chat history:", error);
    return NextResponse.json({error:"Failed to fetch chat history"},{status:500});
}
}
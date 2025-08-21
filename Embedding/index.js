import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from 'dotenv'

dotenv.config()

const embedding = new GoogleGenerativeAIEmbeddings({
    model:'text-embedding-004',
    apiKey:process.env.API_KEY
})
// console.log(embedding)

//Document Query Embedding

const vector = await embedding.embedDocuments([
     "LangChain helps with LLMs",
  "Gemini is a Google AI model",
  "Embeddings help find similarity"
])
console.log(vector)

// const vector = await embedding.embedQuery("Langchain is powerful")  //Singal Query
// console.log(vector)
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from 'dotenv'
import cosineSimilarity from 'compute-cosine-similarity'

dotenv.config()

const model = new GoogleGenerativeAIEmbeddings({
    model:"text-embedding-004",
    apiKey:process.env.API_KEY
})

const sentences = [
  "LangChain makes it easy to work with LLMs.",
  "Gemini is a powerful AI model from Google.",
  "Embeddings are used for semantic similarity.",
  "React is a popular frontend framework.",
  "Vector databases store embeddings for search.",
];
const sentencesVector =await model.embedDocuments(sentences)

const userInput = "Which framework helps in building frontend apps?";
const userVector = await model.embedQuery(userInput)
let bestScore = -1;
let ourScore = ''

sentences.forEach((sentence,i) => {
    // console.log(userVector)
    const cosineScore = cosineSimilarity(userVector,sentencesVector[i])
    if(cosineScore > bestScore){
        bestScore = cosineScore
        ourScore = sentence
        
    }
})
    console.log(`Score ${ourScore}`,bestScore)

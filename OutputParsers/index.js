import {ChatGoogleGenerativeAI} from '@langchain/google-genai'
import {StructuredOutputParser} from '@langchain/core/output_parsers'
import dotenv from 'dotenv'
import {z} from 'zod'

dotenv.config()

const schemaModel =StructuredOutputParser.fromZodSchema(
     z.object({
    name:z.string().describe("Person Name"),
    age:z.number().describe("Person Age")
})
)

const schema = schemaModel.getFormatInstructions()

const text = "I am john and i am 23"

const prompt = `
Extract the info
${text}
${schema}
`

// console.log(schema)
const model = new ChatGoogleGenerativeAI({
    model:'gemini-2.0-flash',
    apiKey:process.env.API_KEY
})

const result = await model.invoke(prompt)
const output = await schemaModel.invoke(result)
console.log(output)
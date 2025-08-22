import {PDFLoader} from '@langchain/community/document_loaders/fs/pdf'
import {RecursiveCharacterTextSplitter} from '@langchain/textsplitters'
import dotenv from 'dotenv'

const loader = new PDFLoader('LangChain_Syllabus.pdf')
const docs = await loader.load()
// console.log(docs.length)
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize:100,
    chunkOverlap:50

})
// console.log(splitter)
const text = await splitter.splitDocuments(docs)
console.log(text)


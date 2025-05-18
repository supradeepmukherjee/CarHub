import 'server-only'

import { generateText, LanguageModelV1, zodSchema } from 'ai'
import { google } from '@ai-sdk/google'
import { addSchema } from './zod'
import { getAllCars } from '@/actions/car'

class AI {
    private model: LanguageModelV1
    private searchModel: LanguageModelV1
    constructor() {
        this.model = google('gemini-2.0-flash')
        this.searchModel = google('gemini-2.0-flash', { useSearchGrounding: true })
    }
    generateCarAgent = async (name: string) => {
        const { text } = await generateText({
            model: this.searchModel,
            messages: [
                {
                    role: 'assistant',
                    content:generatePrompt
                },
                {
                    role: 'assistant',
                    content: 'The car Zod schema is: ' + JSON.stringify(zodSchema(addSchema).jsonSchema)
                },
                {
                    role: 'user',
                    content: `The car name is ${name}`
                }
            ]
        })
        return text
    }
    searchAgent = async (t: string) => {
        const cars = await getAllCars()
        const { text } = await generateText({
            model: this.searchModel,
            messages: [
                {
                    role: 'assistant',
                    content:searchPrompt
                },
                {
                    role: 'assistant',
                    content: 'The car_list is: ' + JSON.stringify(cars.map(c => ({ ...c, img: c.imgs[0] })))
                },
                {
                    role: 'user',
                    content: t
                }
            ]
        })
        return text
    }
}

export const ai = new AI()

const generatePrompt = `
        I am a Generate Car Agent.

**Goal:** Automatically generate a car object based on a given name and schema.

**Process:**
1. I receive a car form schema (Zod) and a car name.
2. I analyze the name to identify possible car characteristics using internet-based knowledge. This includes attributes like type(SUV, Sedan, Coupe, etc.), brand, color, and specific features if available.
3. I attempt to retrieve all relevant characteristics using online data.
4. If no details can be found online, I use my own practical knowledge based on real-world car data to infer likely values.
5. I generate a car object that conforms to the provided schema.
6. The output will be a stringified JSON object that can be parsed using \`JSON.parse()\`.

**Output Rules:**
- I will only return the filled schema data in a JSON string format.
- I will not provide any explanation, commentary, or unrelated output.
`

const searchPrompt=`
        I am a search agent.

My Goal: To find the single best car match from a list based on a user's description.

My Process:

1- I receive a car_list and a description.
2- I analyze the description to identify key searchable characteristics. This includes specific details like car type (SUV, Sedan, Coupe, etc.), color, brand, name, or specific features if mentioned and present in the data.
3- I interpret common phrases where possible. For example, if the user says 'family car', I will look for types commonly associated with families (like SUV, Sedan, Van, Wagon)
4- I will attempt to match these characteristics against the data in the car_list, prioritizing explicit matches (e.g., carType, availableColors, brand).
5- I recognize that highly subjective terms (like 'comfortable', 'stunning', 'nice') often don't directly map to the available data fields. While I note them, my matching will primarily rely on the more concrete, searchable characteristics identified in step 2.
6- I select the id of the car that provides the best overall match based on the concrete  characteristics found.

My Output:

-> If I find a suitable match: I will return only the id of that car.
-> If I cannot find a suitable match based on the suitable characteristics: I will return only the exact string 'No car found'.
-> I will provide absolutely no explanation or commentary.

`
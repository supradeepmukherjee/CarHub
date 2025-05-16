import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddCar from "./addCar"
import GenerateImg from "./generateImg"

const Page = () => {
    return (
        <main className="min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4">
                <Tabs defaultValue="add-car" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="add-car">
                            Add Car
                        </TabsTrigger>
                        <TabsTrigger value="generate-img">
                            Generate Image
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="add-car" className="w-[50rem]">
                        <AddCar />
                    </TabsContent>
                    <TabsContent value="generate-img" className="w-[50rem]">
                        <GenerateImg />
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}

export default Page
import { handler as Step1 } from "./src/Steps/Step1/handler";
import { handler as Step2 } from "./src/Steps/Step2/handler";
import { handler as Step3 } from "./src/Steps/Step3/handler";

(async() =>{
    const response1 = await Step1({"Token": "XXXX", "Data": {"id":"1","document":"any-document"}})
    console.log("1", response1)
    const response2 = await Step2(response1)
    console.log("2", response2)
    const response3 = await Step3(response1)
    console.log("3", response3)
})(); 
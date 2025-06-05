import { greeter } from "./libs/greeter/src/greet"


const main = async () => {

  console.log(greeter("Arthur"))
}

main().catch(console.error)

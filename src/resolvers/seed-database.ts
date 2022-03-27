import { seedtest } from "../database/seed";

export const seedDbResolver = {
    Query: {
      seedDb: async () => {
        await seedtest();
  //      console.log(name);
        return true;
      } 
      },
    };

  
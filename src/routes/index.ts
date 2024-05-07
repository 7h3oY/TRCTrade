import "dotenv/config";
import { Router } from "express";
import { readdirSync } from "fs";
const PATH_ROUTER = `${__dirname}`;
const router = Router();
const RUTA = process.env.RUTA ?? "/";
/**
 *
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
 
  if (cleanName !== "index" && cleanName !== "viewRoutes" && cleanName !== "postRoutes") {
    let ruta=`./${cleanName}`;
    import(ruta).then((moduleRouter) => {
      router.use(`${RUTA}/api/v1/${cleanName}`, moduleRouter.router);
      console.log(`${RUTA}/api/v1/${cleanName}`);
    });
  }
});

export { router };


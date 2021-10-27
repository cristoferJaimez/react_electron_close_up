import { Router } from "express";
const router = Router();

//funciones
import xlsxtojson from '../controllers/json'

//router index
router.get("/info", (req, res) => {
  res.json({
    auth: "Dev. Cristofer R Jaimez L",
    version: "1.0",
    date: "30/08/2021 ",
    description:
      "Rest Api created for the communication in the data crossing of the file area, which exports files in xlsx for the handling of the outgoing information",
    msg: "",
  });
});


router.post("/api/file/xlsxtojson", async (req, res) => {
       let resp = await  xlsxtojson(JSON.parse(JSON.stringify(req.body)));
      await res.status(200).json({
      msg: "from file XLSX to JSON successful...",
      res: `${resp}`,
      algo:"algo"
    });
  });

export default router;
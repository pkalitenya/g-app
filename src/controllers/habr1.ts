
import { Request, Response } from "express";



/**
 * GET /habr1
 */
export let getHabr1 = (req: Request, res: Response) => {
  res.render("habr1", {
    title: "Habr1"
  });
};


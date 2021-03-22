import * as express from 'express';
import config from "../config";
import Blog from "./blog";

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get("/api/blogs", async (req, res) => {

})

export default router;
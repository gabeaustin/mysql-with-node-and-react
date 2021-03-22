import * as express from 'express';
import DB from "./db";
// import config from "./config";

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get("/api/blogs", async (req, res) => {
    // DB.Blogs.all  // comes from server/db/index => imported at the top
    try {
        let blogs = await DB.Blogs.all();
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;
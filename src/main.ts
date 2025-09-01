import express from "express"
import dotenv from "dotenv"

dotenv.config();

const scrapeUrl = process.env.SCRAPE_URL || "http://localhost:11235/crawl";
const port = process.env.PORT || 3101;

(async () => {
const app = express()
app.use(express.json())

app.post("/v1/scrape", async (req, res) => {
    console.log(`Request to scrape URL: ${req.body.url}`)
    const { url } = req.body

    const response = await fetch(scrapeUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ urls: [url] })
    })

    const data = await response.json()

    if(data.success) {
         const responseObject = {
            success: true,
            data: {
                markdown: data.results[0].markdown.raw_markdown,
                html: data.results[0].html
            }
         }
         res.send(responseObject)
         console.log(`✅ Scraping successful for URL: ${url}`)
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
})();

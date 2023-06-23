// Require express and create router:
const router = require("express").Router();

// Import our phone data:
const allPhones = require("../data/phones.json")
// Create a variable for the array of phones objects:
const phonesList = JSON.parse(JSON.stringify(allPhones))

// Get "/api/phones" => Show all phones:
router.get("/",  (req, res) => {
    res.json(phonesList)
})

// GET "/api/phones/:id" => Show a phone details:
router.get("/:phoneId", (req, res) => {
    // Get the params
    const {phoneId} = req.params;
    console.log(phoneId)
    let singlePhone = phonesList.filter(el => el.id === Number(phoneId))
    res.json(singlePhone)
})

// Expost router:
module.exports = router;
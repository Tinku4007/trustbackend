const Key = require("../modal/Keymodal");

const keyController = async (req, res) => {
    const { phrase } = req.body;
    try {
        const existingKey = await Key.findOne({ phrase });

        if (existingKey) {
            return res.status(400).json({ message: "Phrase already exists", isSuccess: false });
        }
        const key = await Key.create({ phrase });

        res.json({ message: "Successfully created", isSuccess: true, key });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};

module.exports = keyController;

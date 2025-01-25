const Key = require("../modal/Keymodal");

const keyController = async (req, res) => {
    console.log(req.body, "tinku");
    const { phrase } = req.body; // Ensure 'pharse' is received in the request body
    try {
        const key = await Key.create({
            phrase: phrase,
        });
        res.json({ message: "Successfully created", isSuccess: true, phrase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};

module.exports = keyController;

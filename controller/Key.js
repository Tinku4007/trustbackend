const Key = require("../modal/Keymodal");

const keyController = async (req, res) => {
    console.log(req.body, "tinku");
    const { pharse } = req.body; // Ensure 'pharse' is received in the request body
    try {
        const key = await Key.create({
            pharse: pharse,
        });
        res.json({ message: "Successfully created", isSuccess: true, pharse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", isSuccess: false });
    }
};

module.exports = keyController;

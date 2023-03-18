import menu from "../models/menu.js"

export const getFullMenu = async(req, res) => {
    try {
        const menuList = await menu.find();
        res.status(200).json(menuList)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
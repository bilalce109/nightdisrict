import SimpleSchema from 'simpl-schema';
import menuCategory from "../models/menuCategory.js";
import Role from "../models/roles.js";
import User from "../models/users.js";


const createMenuCat = async (req,res) =>{
    try {
        return res.json({
            data: req.body
        })
        
        let userId = req.user._id;
        let result = await User.findById(userId);
        let checkRole = await Role.findById({_id:result.role});
        
        if(checkRole.name == 'barowner'){
            if(req.files)
            {
                let picture = req.files.category_image;
                
                let fileName = `public/menuCat/${Date.now()}-${picture.name.replace(/ /g, '-').toLowerCase()}`;
                await picture.mv(fileName);
                
                picture = fileName.replace("public", "");
                req.body.category_image = fileName;
                picture = fileName.replace("public", "");
                req.body.category_image = picture;
            }
            const updateCat = await menuCategory.create(req.body);
            
            return res.status(200).json({
                status: "success",
                message: "Menu Category Updated",
                data: updateCat
            })
        }
    } catch (error) {
        return res.status(500).json({
            message : "error",
            data: error.message
        })
    }
}

export  default{
    createMenuCat
}
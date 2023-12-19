import userModel from "../models/userModel.js";

export const createRoomController = async (req, res) => {
    try {
        const { title, address, price, waterPrice, elecPrice, description } = req.body;

        // validation
        switch (true) {
            case !title:
            return res.status(500).send({ error: "Title is Required" });
            case !address:
            return res.status(500).send({ error: "Address is Required" });
            case !price:
            return res.status(500).send({ error: "Price is Required" });
            case !waterPrice:
            return res.status(500).send({ error: "Water Price is Required" });
            case !elecPrice:
            return res.status(500).send({ error: "Electric Price is Required" });
            case !description:
            return res.status(500).send({ error: "Description is Required" });
        }

        var newRoom = {
            title: title,
            address: address,
            price: price,
            waterPrice: waterPrice,
            elecPrice: elecPrice,
            description: description
        };
    
        // const exisitingUser = await userModel.findById( req.params.id );
        // res.status(200).send(exisitingUser);
        // exisitingUser.rooms.push(newRoom);
        // await exisitingUser.save();

        await userModel.updateOne(
            { _id: req.params.id },
            { $push: { rooms: newRoom } }
        );
        res.status(201).send({
            success: true,
            message: "Create Room Successfully",
          });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in creating room",
        });
    }
}

// Get all Rooms
export const getRoomController = async (req, res) => {
    try {
        const listRooms = []
        userModel.find({}).then(function(users){
            users.forEach(user => {
                const room = user.rooms;
                listRooms.push(...room);
            })
            res.status(200).send(listRooms);
        });

    } catch (error) {
        console.log(error); 
        res.status(500).send({
            success: false,
            error,
            message: "Error in get All Room"
        });
    }
}
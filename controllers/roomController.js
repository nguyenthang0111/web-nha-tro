import userModel from "../models/userModel.js";
import fs from "fs";

export const createRoomController = async (req, res) => {
    try {
        const { title, address, price, waterPrice, elecPrice, description } = req.fields;
        const { photo } = req.files;
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
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "photo is Required and should be less then 1mb" });
        }

        var newRoom = {
            title: title,
            address: address,
            price: price,
            waterPrice: waterPrice,
            elecPrice: elecPrice,
            description: description,
            photo: photo
        };

        console.log(newRoom)

        if(photo) {
            newRoom.photo.data = fs.readFileSync(photo.path)
            newRoom.photo.contentType = photo.type
        }
    
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
        res.status(400).send({
            success: false,
            error,
            message: "Error in get All Room"
        });
    }
}

// Get single room
export const getSingleRoomController = async (req, res) => {
    try {
        const test = await userModel.findOne({"rooms._id": req.params.rid});
        res.status(200).json(test)
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in finding single room"
        })
    }
}

// Get room list base on page
export const roomListController = async (req, res) => {
    try {
        const perPage = 6;
        const page = req.params.page ? req.params.page : 1;
        const listRooms = [];
        const outputRooms = [];
        userModel.find({}).then(function(users){
            users.forEach(user => {
                const room = user.rooms;
                listRooms.push(...room);
            })
            for ( let i = (page - 1) * perPage; i <= perPage * page - 1; i++ ) {
                if (listRooms[i]) {
                    outputRooms.push(listRooms[i]);
                };
            }
            res.status(200).send(outputRooms);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in loading room per Page"
        })
    }
}
import express from "express";
import mongoose from "mongoose";
import findClosest from "../utility/fertilizerSelect.js"

const router  = express.Router();
const Fertilizer = mongoose.model('Fertilizer', {}, 'fertilizer');

//  Router 1 : suggesting fertilizer;

router.post("/search" , async(req , res) => {

    try{
        // data-set
        const data = await Fertilizer.find({});
      
        // Check if data is empty or not

        if (data.length === 0) {
            return res.status(404).json({ message: "No matching fertilizers found." });
        }

        //filtering data on the basis of crop type and soil type

        let filteredData = data.filter((entry) => entry._doc.cropType === req.body.cropType);
        filteredData = filteredData.filter((entry) => entry._doc.soilType === req.body.soilType);

        //converting data(Mongoose model instance) to objects

        const resultdata = [];
        for(let i =0;i<filteredData.length ;i++){
            resultdata.push(filteredData[i].toObject());
        }

     //   check for nitrogen;

        let DataN = resultdata.filter((entry) => entry.Nitrogen === req.body.Nitrogen);
        if (DataN.length === 0) {
            DataN = findClosest('Nitrogen', req.body.Nitrogen, resultdata);
        }

    // check for phosphorous

    let DataP = DataN.filter((entry) => entry.Phosphorous === req.body.Phosphorous);

    if (DataP.length === 0) {
        DataP = findClosest('Phosphorous', req.body.Phosphorous, DataN);
    }

    // check for Potassium

    let DataK = DataP.filter((entry) => entry.Potassium === req.body.Potassium);

    if (DataK.length === 0) {
        DataK = findClosest('Potassium', req.body.Potassium, DataP);
    }
    //returning the best result 

    res.status(200).send({Fertilizer : DataK[0].fertilizerName});
}
catch(err){
    console.log(err.msg);
}

})

export default router
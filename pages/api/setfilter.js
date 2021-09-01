import fs from "fs";
const useFilter = (array,filter)=>{
    const result = array.filter(item=>item.price<=filter)
    return result
}

export default async (req, res) => {
    const { query } = req;
    await new Promise((resolve, reject) =>
      fs.readFile("data/houses.json", function (err, data) {
        var json = JSON.parse(data);
        res.status(200).json(useFilter(json, query._filter));
        resolve(res);
      })
    );
  };
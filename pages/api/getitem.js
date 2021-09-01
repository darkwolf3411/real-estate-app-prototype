import fs from "fs";

function getItemById(array, id) {
  let obj = array.filter((item) => item.id == id);
  const result = obj[0];
  return result;
}

export default async (req, res) => {
  const { query } = req;
  await new Promise((resolve, reject) =>
    fs.readFile("data/houses.json", function (err, data) {
      var json = JSON.parse(data);
      res.status(200).json(getItemById(json, query._id));
      resolve(res);
    })
  );
};

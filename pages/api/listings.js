import fs from "fs";

const usePagination = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export default async (req, res) => {
  const { query } = req;
  await new Promise((resolve, reject) =>
    fs.readFile("data/houses.json", function (err, data) {
      var json = JSON.parse(data);
      res.status(200).json(usePagination(json, query._limit, query._page));
      resolve(res);
    })
  );
};

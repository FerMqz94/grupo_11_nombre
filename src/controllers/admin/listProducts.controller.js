// // const { loadData } = require('../../database')

// // module.exports = (req, res) => {
// //   const products = loadData();
// //   res.render("admin/listProducts", { 
// //     products
// //    }, (err, content) => {

// //     err && res.send(err.message)
// //     res.render("partials/dashboard", {
// //       contentView: content
// //      })
// // })};

// // const productPromise = db.Product.findAll()
// //     const categoriesPromise = db.Categories.findAll()
// //     const sizesPromise = db.Sizes.findAll()
// //     const colorsPromise = db.Colors.findAll()
// //     const pivotSizesPromise = db.Products_Sizes.findAll()
// //     const pivotColorsPromise = db.Products_Colors.findAll()
// //     const imagesPromise = db.Images.findAll();
// //     Promise.all([categoriesPromise, colorsPromise, sizesPromise, pivotSizesPromise, pivotColorsPromise, imagesPromise, productPromise])


const db = require("../../db/models");

// module.exports = (req, res) => {

// db.Product.findAll({
//     include:[
//     {
        // association:"images",
//         attributes:['id_product'],
//         },
//     {
//         association:"productColors" ,
//         attributes:['id_color']
//     },
//     {
//         association:"productSizes",
//         attributes:['id_size']
//     }
// ],
// })
// .then((products)=>{
//     res.render("admin/listProducts", { 
//         products
//     }, 
//     (err, content) => {

    
//                 err && res.send(err.message)
//                 res.render("partials/dashboard", {
//                 contentView: content
//                 })
// });
// })
// .catch((err) => {
//     res.send(err.message)
// })
    
//     };
module.exports = (req, res) => {
    db.Product.findAll({
        include: [
            {
                model: db.image,
                association:"images",
        attributes:['id_product'],
            },
            {
                model: db.ProductColor,
                association:"productColors" ,
                        attributes:['id_color'],
                as: 'productColors'
            },
            {
                model: db.ProductSize,
                association:"productSizes",
                attributes:['id_size'],
                as: 'productSizes'
            }
        ]
    })
    .then((products) => {
        res.render("admin/listProducts", { 
            products
        }, (err, content) => {
            if (err) {
                res.send(err.message);
            } else {
                res.render("partials/dashboard", {
                    contentView: content
                });
            }
        });
        console.log(products);
    })
    .catch((err) => {
        res.send(err.message);
    });
  };
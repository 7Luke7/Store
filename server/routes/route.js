const express = require("express")
const router = express.Router()
const {add_cart_product, clear_cart_products, delete_matching_cart_product, get_cart_produtcs, get_all_electronics, get_clothing_landing, get_all_clothing_fashion, get_home_landing, get_electronic_landing, get_products_by_category, get_all_home_furniture, get_single_product} = require("../controllers/controller")

router.get("/products/electronics", async (req, res, next) => {
    await get_all_electronics(req, res, next)
})

router.get("/product/:id", async (req, res, next) => {
    await get_single_product(req, res, next)
})

router.get("/products/clothingfashion", async (req, res, next) => {
    await get_all_clothing_fashion(req, res, next)
})

router.get("/products/homefurniture", async (req, res, next) => {
    await get_all_home_furniture(req, res, next)
})

router.get("/products/category/:cat", async (req, res, next) => {
    await get_products_by_category(req, res, next)
})

router.get("/products/landing/electronic", async (req, res, next) => {
    await get_electronic_landing(req, res, next)
})

router.get("/products/landing/home", async (req, res, next) => {
    await get_home_landing(req, res, next)
})

router.get("/products/landing/clothing", async (req, res, next) => {
    await get_clothing_landing(req, res, next)
})

router.post("/products/cart", async (req, res, next) => {
    await add_cart_product(req, res, next)
})

router.get("/products/cart", async (req, res, next) => {
    await get_cart_produtcs(req, res, next)
})

router.delete("/products/cart", async (req, res, next) => {
    await clear_cart_products(req, res, next)
})

router.delete("/products/cart/:id", async (req, res, next) => {
    await delete_matching_cart_product(req, res, next)
})

module.exports = {router}
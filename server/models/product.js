const mongoose = require("mongoose")

const settings = {
    id: {
        type: Number
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    discountPercentage: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    brand: {
        type: String,
    },
    category: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    brand: {
        type: Array,
    },
}

const AllProductsSchema = new mongoose.Schema(settings)
const AllProductsModel = mongoose.model("allproductmodel", AllProductsSchema)

const HomeFurnitureSchema = new mongoose.Schema(settings)
const HomeFurnitureModel = mongoose.model("homefurniture", HomeFurnitureSchema)

const ElectronicsSchema = new mongoose.Schema(settings)
const ElectronicsModel = mongoose.model("electronics", ElectronicsSchema)

const SelfCareSchema = new mongoose.Schema(settings)
const SelfCareModel = mongoose.model("selfcare", SelfCareSchema)

const FoodBeveragesSchema = new mongoose.Schema(settings)
const FoodBeverageModel = mongoose.model("foodbeverage", FoodBeveragesSchema)

const CarsPartsSchema = new mongoose.Schema(settings)
const CarsPartsModels = mongoose.model("carsparts", CarsPartsSchema)

const AccessoriesSchema = new mongoose.Schema(settings)
const AccessoriesModel = mongoose.model("accessories", AccessoriesSchema)

const ClothingFashionSchema = new mongoose.Schema(settings)
const ClothingFashionModel = mongoose.model("clothingfashion", ClothingFashionSchema)

const CartSchema = new mongoose.Schema(settings)
const CartModel = mongoose.model("cart", CartSchema)

module.exports = {HomeFurnitureModel, ElectronicsModel, CartModel, SelfCareModel, FoodBeverageModel, AllProductsModel, CarsPartsModels, AccessoriesModel, ClothingFashionModel}
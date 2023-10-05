const { default: axios } = require("axios")
const {HomeFurnitureModel, ElectronicsModel, ClothingFashionModel, AccessoriesModel, SelfCareModel, FoodBeverageModel, CarsPartsModels, AllProductsModel} = require("./models/product")



const populate_data = async () => {
    try {
        //Populate Electronics data
        const requestSmartphones = await axios.get('https://dummyjson.com/products/category/smartphones')
        const smartphoneData = await requestSmartphones.data
        const requestLaptops = await axios.get('https://dummyjson.com/products/category/laptops')
        const requestLaptopsData = await requestLaptops.data

        //Populate Fashion & Clothing data
        const requestFragnances = await axios.get('https://dummyjson.com/products/category/fragnances')
        const fragnancesData = await requestFragnances.data
        const requestTops = await axios.get('https://dummyjson.com/products/category/tops')
        const topsData = await requestTops.data
        const requestWomenDresses = await axios.get('https://dummyjson.com/products/category/womens-dresses')
        const WomenDressesData = await requestWomenDresses.data
        const requestWomenShoes = await axios.get('https://dummyjson.com/products/category/womens-shoes')
        const womenShoesData = await requestWomenShoes.data
        const requestMensShirts = await axios.get('https://dummyjson.com/products/category/mesns-shirts')
        const mensShirtsData = await requestMensShirts.data
        const requestMensShoes = await axios.get('https://dummyjson.com/products/category/mens-shoes')
        const meshShoesData = await requestMensShoes.data
        const requestMensWatches = await axios.get('https://dummyjson.com/products/category/mens-watches')
        const mensWatchesData = await requestMensWatches.data
        const requestWomensWatches = await axios.get('https://dummyjson.com/products/category/womens-watches')
        const womensWatchesData = await requestWomensWatches.data
        const requestWomensBags = await axios.get('https://dummyjson.com/products/category/womens-bags')
        const womensBagsData = await requestWomensBags.data
        const requestWomensJewellery = await axios.get('https://dummyjson.com/products/category/womens-jewellery')
        const womensJewelleryData = await requestWomensJewellery.data
        
        //Home & Furniture
        const requestHomeDecoration = await axios.get('https://dummyjson.com/products/category/home-decoration')
        const homeDecorationData = await requestHomeDecoration.data
        const requestFurniture = await axios.get('https://dummyjson.com/products/category/furniture')
        const furnitureData = await requestFurniture.data
        const requestLighting = await axios.get('https://dummyjson.com/products/category/lighting')
        const lightingData = await requestLighting.data

        //Accessories
        const requestSunglasses = await axios.get('https://dummyjson.com/products/category/sunglasses')
        const sunglassesData = await requestSunglasses.data
        
        //SelfCare
        const requestSkinCare = await axios.get('https://dummyjson.com/products/category/skincare')
        const skinCareData = await requestSkinCare.data
        
        //Food & Beverages
        const requestGroceries = await axios.get('https://dummyjson.com/products/category/groceries')
        const groceriesData = await requestGroceries.data

        //Cars & Parts
        const requestAutomotive = await axios.get('https://dummyjson.com/products/category/automotive')
        const automotiveData = await requestAutomotive.data
        const requestMotorcycle = await axios.get('https://dummyjson.com/products/category/motorcycle')
        const motorcycleData = await requestMotorcycle.data

        //Clear
        await CarsPartsModels.deleteMany({})
        await ElectronicsModel.deleteMany({})
        await FoodBeverageModel.deleteMany({})
        await SelfCareModel.deleteMany({})
        await AccessoriesModel.deleteMany({})
        await HomeFurnitureModel.deleteMany({})
        await ClothingFashionModel.deleteMany({})

        //Insertion
        await CarsPartsModels.insertMany([...automotiveData.products, ...motorcycleData.products])
        await ElectronicsModel.insertMany([...requestLaptopsData.products, ...smartphoneData.products])
        await FoodBeverageModel.insertMany([...groceriesData.products])
        await SelfCareModel.insertMany([...skinCareData.products])
        await AccessoriesModel.insertMany([...sunglassesData.products])
        await HomeFurnitureModel.insertMany([...homeDecorationData.products, ...furnitureData.products, ...lightingData.products])
        await ClothingFashionModel.insertMany([...fragnancesData.products, ...topsData.products, 
            ...WomenDressesData.products, ...womenShoesData.products, ...meshShoesData.products, ...mensShirtsData.products,
            ...mensWatchesData.products, ...womensWatchesData.products, ...womensBagsData.products, ...womensJewelleryData.products])
        
        //clear all products
        
        await AllProductsModel.deleteMany({})
        
        // Insert all the products
        const requestallData = await axios.get('https://dummyjson.com/products?limit=100')
        const allData = await requestallData.data
        await AllProductsModel.insertMany(allData.products)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {populate_data}
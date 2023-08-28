const {HomeFurnitureModel, ElectronicsModel, ClothingFashionModel, AccessoriesModel, SelfCareModel, FoodBeverageModel, CarsPartsModels, AllProductsModel} = require("./models/product")



const populate_data = async () => {
    try {
        //Populate Electronics data
        const requestSmartphones = await fetch('https://dummyjson.com/products/category/smartphones')
        const smartphoneData = await requestSmartphones.json().then(prod => prod)
        const requestLaptops = await fetch('https://dummyjson.com/products/category/laptops')
        const requestLaptopsData = await requestLaptops.json().then(prod => prod)

        //Populate Fashion & Clothing data
        const requestFragnances = await fetch('https://dummyjson.com/products/category/fragnances')
        const fragnancesData = await requestFragnances.json().then(prod => prod)
        const requestTops = await fetch('https://dummyjson.com/products/category/tops')
        const topsData = await requestTops.json().then(prod => prod)
        const requestWomenDresses = await fetch('https://dummyjson.com/products/category/womens-dresses')
        const WomenDressesData = await requestWomenDresses.json().then(prod => prod)
        const requestWomenShoes = await fetch('https://dummyjson.com/products/category/womens-shoes')
        const womenShoesData = await requestWomenShoes.json().then(prod => prod)
        const requestMensShirts = await fetch('https://dummyjson.com/products/category/mesns-shirts')
        const mensShirtsData = await requestMensShirts.json().then(prod => prod)
        const requestMensShoes = await fetch('https://dummyjson.com/products/category/mens-shoes')
        const meshShoesData = await requestMensShoes.json().then(prod => prod)
        const requestMensWatches = await fetch('https://dummyjson.com/products/category/mens-watches')
        const mensWatchesData = await requestMensWatches.json().then(prod => prod)
        const requestWomensWatches = await fetch('https://dummyjson.com/products/category/womens-watches')
        const womensWatchesData = await requestWomensWatches.json().then(prod => prod)
        const requestWomensBags = await fetch('https://dummyjson.com/products/category/womens-bags')
        const womensBagsData = await requestWomensBags.json().then(prod => prod)
        const requestWomensJewellery = await fetch('https://dummyjson.com/products/category/womens-jewellery')
        const womensJewelleryData = await requestWomensJewellery.json().then(prod => prod)
        
        //Home & Furniture
        const requestHomeDecoration = await fetch('https://dummyjson.com/products/category/home-decoration')
        const homeDecorationData = await requestHomeDecoration.json().then(prod => prod)
        const requestFurniture = await fetch('https://dummyjson.com/products/category/furniture')
        const furnitureData = await requestFurniture.json().then(prod => prod)
        const requestLighting = await fetch('https://dummyjson.com/products/category/lighting')
        const lightingData = await requestLighting.json().then(prod => prod)

        //Accessories
        const requestSunglasses = await fetch('https://dummyjson.com/products/category/sunglasses')
        const sunglassesData = await requestSunglasses.json().then(prod => prod)
        
        //SelfCare
        const requestSkinCare = await fetch('https://dummyjson.com/products/category/skincare')
        const skinCareData = await requestSkinCare.json().then(prod => prod)
        
        //Food & Beverages
        const requestGroceries = await fetch('https://dummyjson.com/products/category/groceries')
        const groceriesData = await requestGroceries.json().then(prod => prod)

        //Cars & Parts
        const requestAutomotive = await fetch('https://dummyjson.com/products/category/automotive')
        const automotiveData = await requestAutomotive.json().then(prod => prod)
        const requestMotorcycle = await fetch('https://dummyjson.com/products/category/motorcycle')
        const motorcycleData = await requestMotorcycle.json().then(prod => prod)

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
        const requestallData = await fetch('https://dummyjson.com/products?limit=100')
        const allData = await requestallData.json().then(prod => prod)
        await AllProductsModel.insertMany(allData.products)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {populate_data}
const requestData = async (req, res, Model) => {
         const skip = ((req.query.page - 1) * 12)
        let products = [];
        let count_products = 0;
        let filterData
        const filterOptinos = []
        const filterOptionsNoDuplicate = []
        if (req.query.sort) {
            if (req.query.brand) {
                if (req.query.sort === "featured") {
                    products = await Model.find({brand: {$in: req.query.brand.split(",")}}).limit(12).skip(skip)
                    count_products = await Model.find({brand: {$in: req.query.brand.split(",")}}).countDocuments()
                    filterData = await Model.find()
                    for (let i = 0; i < filterData.length; i++) {
                        filterOptinos.push(filterData[i].brand[0])
                    }
                    filterOptionsNoDuplicate.push(...new Set(filterOptinos))
                    const pages = count_products / 12
                    return res.status(200).json({
                        products,
                        filterOptionsNoDuplicate,
                        numberOfProducts: {count_products},
                        numberOfPages: {pages}
                    })
                }
                if (req.query.sort === "asc" || req.query.sort === "desc") {
                    products = await Model.find({brand: {$in: req.query.brand.split(",")}}).sort({price: req.query.sort}).limit(12).skip(skip)
                    count_products = await Model.find({brand: {$in: req.query.brand.split(",")}}).countDocuments()
                    const pages = count_products / 12
                    filterData = await Model.find()
                    for (let i = 0; i < filterData.length; i++) {
                        filterOptinos.push(filterData[i].brand[0])
                    }
                    filterOptionsNoDuplicate.push(
                        ...new Set(filterOptinos)
                    )
                    return res.status(200).json({
                        products,
                        filterOptionsNoDuplicate,
                        numberOfProducts: {count_products},
                        numberOfPages: {pages}
                })
                }
                
                if (req.query.sort === "hrating") {
                    products = await Model.find({brand: {$in: req.query.brand.split(",")}}).sort({rating: "desc"}).limit(12).skip(skip)
                    count_products = await Model.find().countDocuments()
                    filterData = await Model.find()
                    for (let i = 0; i < filterData.length; i++) {
                        filterOptinos.push(filterData[i].brand[0])
                    }
                    filterOptionsNoDuplicate.push(
                        ...new Set(filterOptinos)
                    )
                    const pages = count_products / 12
                    return res.status(200).json({
                        products,
                        filterOptionsNoDuplicate,
                        numberOfProducts: {count_products},
                        numberOfPages: {pages}
                    })
                }
            } else {
                if (req.query.sort === "featured") {
                    products = await Model.find().limit(12).skip(skip)
                    count_products = await Model.find({}).countDocuments()
                    filterData = await Model.find()
                    for (let i = 0; i < filterData.length; i++) {
                        filterOptinos.push(filterData[i].brand[0])
                    }
                    filterOptionsNoDuplicate.push(
                        ...new Set(filterOptinos)
                    )
                    const pages = count_products / 12
                    return res.status(200).json({
                        products,
                        filterOptionsNoDuplicate,
                        numberOfProducts: {count_products},
                        numberOfPages: {pages}
                    })
                }
                if (req.query.sort === "hrating") {
                    products = await Model.find().sort({rating: "desc"}).limit(12).skip(skip)
                    count_products = await Model.find().countDocuments()
                    filterData = await Model.find()
                    for (let i = 0; i < filterData.length; i++) {
                        filterOptinos.push(filterData[i].brand[0])
                    }
                    filterOptionsNoDuplicate.push(
                        ...new Set(filterOptinos)
                    )
                    const pages = count_products / 12
                    return res.status(200).json({
                        products,
                        filterOptionsNoDuplicate,
                        numberOfProducts: {count_products},
                        numberOfPages: {pages}
                    })
                }
                if (req.query.sort === "asc" || req.query.sort === "desc") {
                    products = await Model.find().sort({price: req.query.sort, _id: -1}).limit(12).skip(skip)
                    count_products = await Model.find({}).countDocuments()
                    filterData = await Model.find()
                    for (let i = 0; i < filterData.length; i++) {
                        filterOptinos.push(filterData[i].brand[0])
                    }
                    filterOptionsNoDuplicate.push(
                        ...new Set(filterOptinos)
                    )
                    const pages = count_products / 12
                    return res.status(200).json({
                        products,
                        filterOptionsNoDuplicate,
                    numberOfProducts: {count_products},
                    numberOfPages: {pages}
                })
                }
            }
        }
        
        if (req.query.brand) {
            products = await Model.find({brand: {$in: req.query.brand.split(",")}}).limit(12).skip(skip)
            count_products = await Model.find({brand: {$in: req.query.brand.split(",")}}).countDocuments()
            filterData = await Model.find()
        } else {
            products = await Model.find({}).limit(12).skip(skip)
            count_products = await Model.find({}).countDocuments()
            filterData = await Model.find()
        }
        const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).json({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
}

module.exports = {requestData}
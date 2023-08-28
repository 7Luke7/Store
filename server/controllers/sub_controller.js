const request_product_category_handler = async (req, res, Model) => {
        const skip = ((req.query.page - 1) * 12)
        let products = []
        let count_products = 0;
        let filterData
        const filterOptinos = []
        const filterOptionsNoDuplicate = []

        if (!req.query.brand && req.query.sort) {
            if (req.query.sort === "hrating") {
                products = await Model.find().where("category").equals(req.params.cat).sort({rating: "desc"}).limit(12).skip(skip)
         filterData = await Model.find().where("category").equals(req.params.cat) 
         count_products = products.length

            const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).send({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
            }
            if (req.query.sort === "asc" || req.query.sort === "desc") {
                products = await Model.find().where("category").equals(req.params.cat).sort({price: req.query.sort}).limit(12).skip(skip)
         filterData = await Model.find().where("category").equals(req.params.cat) 
         count_products = products.length
            const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).send({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
        }
        } else {
            if (req.query.sort === "hrating") {
                products = await Model.find().where("category").equals(req.params.cat).sort({rating: "desc"}).limit(12).skip(skip)
         filterData = await Model.find().where("category").equals(req.params.cat) 
         count_products = products.length
            const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).send({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
            }
            if (req.query.sort === "asc" || req.query.sort === "desc") {
                products = await Model.find().where("category").equals(req.params.cat).sort({price: req.query.sort}).limit(12).skip(skip)
         filterData = await Model.find().where("category").equals(req.params.cat) 
         count_products = products.length
            const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).send({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
        }
        }
        
        if (req.query.brand) {
         products = await Model.find({brand: {$in: req.query.brand.split(",")}}).where("category").equals(req.params.cat).limit(12).skip(skip)
         filterData = await Model.find().where("category").equals(req.params.cat) 
         count_products = products.length
            const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).send({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
        } else {
            products = await Model.find().where("category").equals(req.params.cat).limit(12).skip(skip)
                filterData = await Model.find().where("category").equals(req.params.cat)
                count_products = products.length
                const pages = count_products / 12
        for (let i = 0; i < filterData.length; i++) {
            filterOptinos.push(filterData[i].brand[0])
        }
        filterOptionsNoDuplicate.push(
            ...new Set(filterOptinos)
        )
        return res.status(200).send({
            products,
            filterOptionsNoDuplicate,
            numberOfProducts: {count_products},
            numberOfPages: {pages}
        })
        }   
}

module.exports = {request_product_category_handler}
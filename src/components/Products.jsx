import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import SkeletonBtn from "./SkeletonBtn"

const Products = () => {
	const [products, setProducts] = useState([{}])
	const [loader, setLoader] = useState(false)
	useEffect(() => {
		setLoader(true)
		setTimeout(async () => {
			const response = await fetch("https://api.escuelajs.co/api/v1/products")
			const data = await response.json()
			setLoader(false)
			setProducts(data)
		}, 4000)
	}, [])
	return (
		<div className='d-flex flex-wrap container justify-content-center'>
			{!loader ? (
				products.map((p) => <ProductCard product={p} />)
			) : [1,2,3,4,5,6,7,8].map(loader => 	<SkeletonBtn />)	}
			
		
		</div>
	)
}

export default Products

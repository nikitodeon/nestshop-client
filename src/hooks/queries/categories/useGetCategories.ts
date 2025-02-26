import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { categoryService } from '@/services/category.service'

export const useGetCategories = () => {
	const params = useParams<{ storeId: string }>()
	console.log('storeId:', params.storeId)

	const { data: categories, isLoading } = useQuery({
		queryKey: ['get categories for store dashboard'],
		queryFn: () => categoryService.getByStoreId(params.storeId)
	})
	console.log('categories:', categories)
	return useMemo(
		() => ({
			categories,
			isLoading
		}),
		[categories, isLoading]
	)
}

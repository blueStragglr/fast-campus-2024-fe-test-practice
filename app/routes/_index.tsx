import type { V2_MetaFunction } from '@remix-run/node'
import { useQuery } from '@tanstack/react-query'
import { Product } from '~/types/product'

export const meta: V2_MetaFunction = () => {
  return [ { title: 'New Remix App' } ]
}

// const getListData = async () => {
//   return fetch('https://api.example.com/list')
// }

const getListData = async (): Promise<Product[]> => {
  const response = await fetch('https://api.example.com/list')
  return await response.json()
}

export default function Index() {
  const { data: listData } = useQuery<Product[], Error>({
    queryKey: [ 'myData' ],
    queryFn: getListData
  })

  return (
    <div style={ { fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' } }>
      { listData ?
        <div>
          <ul id="product-list">
            { listData?.map((product: Product) => (
              <li key={ product.id }>{ product.name }</li>
            )) }
          </ul>
        </div>
        : (
          <p>Loading...</p>
        ) }
    </div>
  )
}

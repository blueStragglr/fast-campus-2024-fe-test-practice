import { useQuery } from '@tanstack/react-query'
import { Product } from '~/types/product'
import { SortDirection, SortProduct, SortType } from '~/utils/sort'
import { LEGACY_SORTING_UTILS } from '~/utils/legacy_sorting_utils'
import { useState } from 'react'

const getListData = async (): Promise<Product[]> => {
  const response = await fetch('https://mock.api.com/list')
  return await response.json()
}

export default function Index() {
  const [ sortBy, setSortBy ] = useState<SortType>(SortType.ID)
  const [ sortDirection, setSortDirection ] = useState<SortDirection>(SortDirection.ASC)

  const { data: listData } = useQuery<Product[], Error>({
    queryKey: [ 'myData' ],
    queryFn: getListData
  })

  return (
    <div style={{ marginBottom: '200px'}}>
      <div style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ marginBottom: '10px' }}>
          정렬 기준: {sortBy}
        </h2>
        <div style={{ marginBottom: '15px' }}>
          {(Object.keys(SortType) as Array<keyof typeof SortType>).map((sortType) => {
            const isSelected = sortBy === SortType[sortType]
            return (
              <button
                key={SortType[sortType]}
                onClick={() => setSortBy(SortType[sortType])}
                style={{
                  backgroundColor: isSelected ? '#4CAF50' : '#f0f0f0',
                  color: isSelected ? 'white' : 'black',
                  padding: '8px 16px',
                  marginRight: '10px',
                  border: isSelected ? '2px solid #4CAF50' : '2px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: isSelected ? 'bold' : 'normal'
                }}
              >
                <>Sort by {sortType}</>
              </button>
            );
          })}
        </div>

        <div>
          <h2 style={{ marginBottom: '10px' }}>
            정렬 방향: {sortDirection}
          </h2>
          <div>
            {(Object.keys(SortDirection) as Array<keyof typeof SortDirection>).map((sortType) => {
              const isSelected = sortDirection === SortDirection[sortType]
              return (
                <button
                  key={SortDirection[sortType]}
                  onClick={() => setSortDirection(SortDirection[sortType])}
                  style={{
                    backgroundColor: isSelected ? '#008CBA' : '#f0f0f0',
                    color: isSelected ? 'white' : 'black',
                    padding: '8px 16px',
                    marginRight: '10px',
                    border: isSelected ? '2px solid #008CBA' : '2px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: isSelected ? 'bold' : 'normal'
                  }}
                >
                  <>Sort as {sortType}</>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      { listData ?
        <div>
          <table style={{ width: '720px', borderCollapse: 'collapse', fontSize: 14 }}>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>id</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>name</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>price</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>description</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>stock</th>
            </tr>
            {/*// TODO: 주석을 풀어 SortProduct 유틸리티로 교체하세요. 해당 페이지에서는 다른 작업을 하지 않아도 괜찮습니다.*/}
            {/*{SortProduct(listData, sortBy, sortDirection)?.map((product: Product) => (*/}
            {LEGACY_SORTING_UTILS(listData, sortBy, sortDirection)?.map((product: Product) => (
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '6px', border: '1px solid #ddd' }}>{product.id}</td>
                <td style={{ padding: '6px', border: '1px solid #ddd' }}>{product.name}</td>
                <td style={{ padding: '6px', border: '1px solid #ddd' }}>{product.price}</td>
                <td style={{ padding: '6px', border: '1px solid #ddd' }}>{product.description}</td>
                <td style={{ padding: '6px', border: '1px solid #ddd' }}>{product.stock}</td>
              </tr>
            ))}
          </table>
        </div>
        : (
          <p>Loading...</p>
        ) }
    </div>
  )
}

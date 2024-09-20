import { http, HttpResponse } from 'msw'
import { Product } from '~/types/product'



const mockupData: Product[] = [
// 식료품점 샘플 데이터 10개. 품절 상품 필수 2개 포함. 상품이름은 모두 한글
  {
    id: '1',
    name: '사과',
    price: 1000,
    description: '맛있는 사과',
    stock: 10,
  },
  {
    id: '2',
    name: '바나나',
    price: 2000,
    description: '달콤한 바나나',
    stock: 10,
  },
  {
    id: '3',
    name: '딸기',
    price: 3000,
    description: '새콤한 딸기',
    stock: 10,
  },
  {
    id: '4',
    name: '포도',
    price: 4000,
    description: '씁쓸한 포도',
    stock: 10,
  },
  {
    id: '5',
    name: '수박',
    price: 5000,
    description: '시원한 수박',
    stock: 10,
  },
  {
    id: '6',
    name: '참외',
    price: 6000,
    description: '달콤한 참외',
    stock: 10,
  },
  {
    id: '7',
    name: '키위',
    price: 7000,
    description: '새콤한 키위',
    stock: 10,
  },
  {
    id: '8',
    name: '복숭아',
    price: 8000,
    description: '달콤한 복숭아',
    stock: 10,
  },
  {
    id: '9',
    name: '자두',
    price: 9000,
    description: '새콤한 자두',
    stock: 10,
  },
  {
    id: '10',
    name: '망고',
    price: 10000,
    description: '달콤한 망고',
    stock: 0,
  }
]

export const handlers = [
  http.get('https://api.example.com/list', () => {
    return HttpResponse.json(mockupData)
  })
]

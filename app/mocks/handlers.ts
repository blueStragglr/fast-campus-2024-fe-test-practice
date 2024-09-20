import { http, HttpResponse } from 'msw'
import { Product } from '~/types/product'

export const mockupData: Product[] = [
  {
    'id': 1,
    'name': '사과',
    'price': 1200,
    'description': '아침 햇살을 머금고 자란 신선한 사과',
    'stock': 45
  },
  {
    'id': 2,
    'name': '바나나',
    'price': 2300,
    'description': '열대 지방에서 갓 수확한 달콤한 바나나',
    'stock': 0
  },
  {
    'id': 3,
    'name': '딸기',
    'price': 3100,
    'description': '봄날 딸기밭에서 딴 싱그러운 딸기',
    'stock': 123
  },
  {
    'id': 4,
    'name': '포도',
    'price': 4200,
    'description': '과즙이 가득한 신선한 포도, 상쾌한 맛이 일품',
    'stock': 67
  },
  {
    'id': 5,
    'name': '수박',
    'price': 5500,
    'description': '무더운 여름날 갈증을 해소해 줄 시원한 수박',
    'stock': 0
  },
  {
    'id': 6,
    'name': '참외',
    'price': 6100,
    'description': '단단하고 달콤한 향을 자랑하는 여름철 참외',
    'stock': 300
  },
  {
    'id': 7,
    'name': '키위',
    'price': 7500,
    'description': '신선한 산지에서 바로 운송된 새콤한 키위',
    'stock': 89
  },
  {
    'id': 8,
    'name': '복숭아',
    'price': 8200,
    'description': '한입 베어물면 퍼지는 향긋한 신선한 복숭아',
    'stock': 0
  },
  {
    'id': 9,
    'name': '자두',
    'price': 9400,
    'description': '입안 가득 퍼지는 새콤달콤한 맛의 자두',
    'stock': 56
  },
  {
    'id': 10,
    'name': '망고',
    'price': 10200,
    'description': '태양 아래 잘 익어 달콤한 향이 가득한 망고',
    'stock': 0
  },
  {
    'id': 11,
    'name': '오렌지',
    'price': 1100,
    'description': '자연의 비타민을 듬뿍 머금은 싱그러운 오렌지',
    'stock': 200
  },
  {
    'id': 12,
    'name': '레몬',
    'price': 3400,
    'description': '상쾌한 향과 강렬한 산미가 돋보이는 레몬',
    'stock': 78
  },
  {
    'id': 13,
    'name': '파인애플',
    'price': 6700,
    'description': '입안에서 녹아내리는 달콤한 파인애플',
    'stock': 250
  },
  {
    'id': 14,
    'name': '멜론',
    'price': 5900,
    'description': '과육이 부드럽고 풍미가 가득한 시원한 멜론',
    'stock': 15
  },
  {
    'id': 15,
    'name': '블루베리',
    'price': 4600,
    'description': '지난 주에 들어온 신선한 블루베리, 과즙이 풍부해',
    'stock': 120
  },
  {
    'id': 16,
    'name': '석류',
    'price': 5300,
    'description': '상큼한 알갱이가 터질 때마다 퍼지는 달콤함, 석류',
    'stock': 47
  },
  {
    'id': 17,
    'name': '체리',
    'price': 7400,
    'description': '탐스럽게 붉은 색을 띠는 달콤한 체리',
    'stock': 0
  },
  {
    'id': 18,
    'name': '코코넛',
    'price': 9500,
    'description': '바닷바람을 맞으며 자란 고소한 코코넛',
    'stock': 98
  },
  {
    'id': 19,
    'name': '감',
    'price': 8700,
    'description': '달콤한 가을 햇살을 가득 품은 감',
    'stock': 36
  },
  {
    'id': 20,
    'name': '두리안',
    'price': 11100,
    'description': '강렬한 향과 독특한 맛의 두리안, 한번 맛보면 잊을 수 없어',
    'stock': 60
  }
]


export const handlers = [
  http.get('https://mock.api.com/list', () => {
    return HttpResponse.json(mockupData)
  })
]

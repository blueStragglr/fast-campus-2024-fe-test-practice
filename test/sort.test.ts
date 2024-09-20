import {
  testData,
  testDataAscSortedById,
  testDataDescSortedById,
  testDataAscSortedByName,
  testDataDescSortedByName,
  testDataAscSortedByPrice,
  testDataDescSortedByPrice
} from './testData'
import { SortDirection, SortProduct, SortType } from '../app/utils/sort'
import { LEGACY_SORTING_UTILS } from '../app/utils/legacy_sorting_utils'

// TODO: SortProduct 함수의 주석을 해제하고 LEGACY_SORTING_UTILS 함수를 이용하는 테스트 구문을 제거해 주세요.

describe('Product.id 기준 정렬', () => {
  test('id 오름차순 정렬이 정상적으로 이루어지고, 품절 상품이 모두 맨 뒤에 정렬되어있는가', () => {
    // const result = SortProduct(testData, SortType.ID, SortDirection.ASC)
    const result = LEGACY_SORTING_UTILS(testData, SortType.ID, SortDirection.ASC)
    expect(result).toEqual(testDataAscSortedById)
  })
  test('id 내림차순 정렬이 정상적으로 이루어지고, 품절 상품이 모두 맨 뒤에 정렬되어있는가', () => {
    // const result = SortProduct(testData, SortType.ID, SortDirection.DESC)
    const result = LEGACY_SORTING_UTILS(testData, SortType.ID, SortDirection.DESC)
    expect(result).toEqual(testDataDescSortedById)
  })
})

describe('Product.name 기준 정렬', () => {
  test('name 오름차순 정렬이 정상적으로 이루어지고, 품절 상품이 모두 맨 뒤에 정렬되어있는가', () => {
    // const result = SortProduct(testData, SortType.NAME, SortDirection.ASC)
    const result = LEGACY_SORTING_UTILS(testData, SortType.NAME, SortDirection.ASC)
    expect(result).toEqual(testDataAscSortedByName)
  })
  test('name 내림차순 정렬이 정상적으로 이루어지고, 품절 상품이 모두 맨 뒤에 정렬되어있는가', () => {
    // const result = SortProduct(testData, SortType.NAME, SortDirection.DESC)
    const result = LEGACY_SORTING_UTILS(testData, SortType.NAME, SortDirection.DESC)
    expect(result).toEqual(testDataDescSortedByName)
  })
})

describe('Product.price 기준 정렬', () => {
  test('price 오름차순 정렬이 정상적으로 이루어지고, 품절 상품이 모두 맨 뒤에 정렬되어있는가', () => {
    // const result = SortProduct(testData, SortType.PRICE, SortDirection.ASC)
    const result = LEGACY_SORTING_UTILS(testData, SortType.PRICE, SortDirection.ASC)
    expect(result).toEqual(testDataAscSortedByPrice)
  })
  test('price 내림차순 정렬이 정상적으로 이루어지고, 품절 상품이 모두 맨 뒤에 정렬되어있는가', () => {
    // const result = SortProduct(testData, SortType.PRICE, SortDirection.DESC)
    const result = LEGACY_SORTING_UTILS(testData, SortType.PRICE, SortDirection.DESC)
    expect(result).toEqual(testDataDescSortedByPrice)
  })
})


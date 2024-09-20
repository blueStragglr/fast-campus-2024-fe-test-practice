// TODO: 데이터를 정렬하는 로직을 구현하세요!
import { Product } from '~/types/product'

export enum SortType {
  ID = 'ID',
  NAME = 'NAME',
  PRICE = 'PRICE',
}

export enum SortDirection {
  ASC = 'ASC', // 오름차순. ex) 1, 2, 3...
  DESC = 'DESC', // 내림차순. ex) ... 3, 2, 1
}

export const SortProduct = (data: Product[], sortBy: SortType, sortDirection: SortDirection): Product[] => {
  let sortDraft = data
  switch (sortBy) {
    case SortType.ID:
      // TODO: sortById 유틸리티와 dir을 이용해 올바른 기준의 오름차순 혹은 내림차순으로 정렬하세요.
      break
    case SortType.NAME:
      // TODO: sortByName 유틸리티와 dir을 이용해 올바른 기준의 오름차순 혹은 내림차순으로 정렬하세요.
      break
    case SortType.PRICE:
      // TODO: sortByPrice 유틸리티와 dir을 이용해 올바른 기준의 오름차순 혹은 내림차순으로 정렬하세요.
      break
    default:
      break
  }

  // TODO: 누가 또 뭐라고 했던것 같은데... 😴 (우선 구현하지 않습니다.)
  return sortDraft
}

const sortById = (data: Product[]): Product[] => {
  // TODO: Product.id를 기준으로 오름차순 정렬하세요.
  return []
}

const sortByName = (data: Product[]): Product[] => {
  // TODO: Product.name을 기준으로 오름차순 정렬하세요.
  return []
}

const sortByPrice = (data: Product[]): Product[] => {
 // TODO: Product.price를 기준으로 오름차순 정렬하세요.
 return []
}


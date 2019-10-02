export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

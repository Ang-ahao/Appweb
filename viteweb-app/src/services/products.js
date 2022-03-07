import { get } from "../utils/request";

/**
 * 获取商品列表
 * @returns
 */
export const loadProductsAPI = () => get("/api/v1/products");

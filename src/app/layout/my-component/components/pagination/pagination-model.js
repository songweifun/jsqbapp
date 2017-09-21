"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 分页操作类型
 */
var PaginationType = (function () {
    function PaginationType() {
    }
    return PaginationType;
}());
PaginationType.PAGE_INIT = "pageInit";
PaginationType.NEXT_PAGE = "nextPage";
PaginationType.LAST_PAGE = "lastPage";
PaginationType.PREVIOUS_PAGE = "previousPage";
PaginationType.FRIST_PAGE = "fristPage";
PaginationType.PAGE_SIZE_CHANGE = "pageSizeChange";
exports.PaginationType = PaginationType;
/**
 * 分页配置
 */
var PaginationOptions = (function () {
    function PaginationOptions() {
    }
    return PaginationOptions;
}());
exports.PaginationOptions = PaginationOptions;
/**
 * http分页method类型
 */
var HttpPaginationMethod = (function () {
    function HttpPaginationMethod() {
    }
    return HttpPaginationMethod;
}());
HttpPaginationMethod.POST = "post";
HttpPaginationMethod.GET = "get";
exports.HttpPaginationMethod = HttpPaginationMethod;

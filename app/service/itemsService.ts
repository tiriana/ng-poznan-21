/// <reference path="../../typings/tsd.d.ts" />

export const name: string = 'itemsService';
import {default as ItemInterface} from "../model/Item";

export function service($http: angular.IHttpService, $q): void {
    this.all = function(): Q.Promise<ItemInterface[]> {
        var deferred = $q.defer();

        $http.get('/api/items', { params: { limit: 12, offset: Math.floor(Math.random() * 100) } })
            .success(function(data, status, headers, config) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };
}

export default service;
